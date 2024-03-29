import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getGuildChannelStats } from "../services/neatqueue-service";
import { classNames } from "../util/tailwind";
import LeaderboardItem from "./LeaderboardItem";

type sortsVal = "mmr" | "wins" | "losses" | "totalgames";
type sortsKey = "MMR" | "Wins" | "Losses" | "Games";
type sortKeyMap = {
  sortsKey: sortsVal;
};

const sortKeys: any = {
  MMR: "mmr",
  Wins: "wins",
  Losses: "losses",
  Games: "totalgames",
  Streak: "streak",
  Peak_MMR: "peak_mmr",
  Peak_Streak: "peak_streak",
  Win_Rate: "winrate",
};

// TODO
type LooseObject = {
  [key: string]: any;
};

const Leaderboard = ({
  passedGuildId = "",
  passedChannelId = "",
}: {
  passedGuildId?: string;
  passedChannelId?: string;
}) => {
  let { guildID, channelID } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParamSort = searchParams.get("sort");

  const [month, setMonth] = useState("alltime");
  const [sortKey, setSortKey] = useState(
    urlParamSort && Object.keys(sortKeys).includes(urlParamSort)
      ? urlParamSort
      : "MMR"
  );
  const [stats, setStats] = useState<LooseObject>();

  if (guildID === undefined) guildID = passedGuildId;
  if (channelID === undefined) channelID = passedChannelId;

  useEffect(() => {
    if (guildID && channelID)
      getGuildChannelStats(guildID, channelID)
        .catch(() => console.log("Error fetching leaderboard data"))
        .then(setStats);
  }, []);

  useEffect(() => {
    if (stats) setMonth(Object.keys(stats)[0]);
  }, [stats]);

  const changeSort = (sortKey: string) => {
    setSortKey(sortKey);
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("sort", sortKey);
    setSearchParams(updatedSearchParams.toString());
  };

  const scrollChangeSort = (scrollRight: boolean) => {
    const sortKeyArray = Object.keys(sortKeys);
    const idx = sortKeyArray.indexOf(sortKey);
    const nextIdx = scrollRight
      ? (idx + 1) % sortKeyArray.length
      : (idx - 1 + sortKeyArray.length) % sortKeyArray.length;
    changeSort(sortKeyArray[nextIdx]);
  };

  const dateOptions = { year: "numeric", month: "short" };

  return (
    <div className="grid grid-cols-10 mx-auto max-w-7xl min-h-screen">
      <div className="col-span-1">
        <ul className="grid-cols-1 text-center md:grid hidden">
          {stats &&
            Object.keys(stats).length > 1 &&
            Object.keys(stats).map((m) => (
              <li
                key={m}
                onClick={() => setMonth(m)}
                className={classNames(
                  month === m ? "bg-red-500/80" : "bg-violet-900/80",
                  "px-2 py-1 shadow-xl text-lg mb-1 mr-3 cursor-pointer"
                )}
              >
                <h1>
                  {m === "alltime"
                    ? "All Time"
                    : new Date(m + "-15").toLocaleDateString(
                        "en-US",
                        /* @ts-ignore */
                        dateOptions
                      )}
                </h1>
              </li>
            ))}
        </ul>
      </div>

      <div className="col-span-8">
        <div className="md:visible invisible flex flex-row mb-3 justify-center gap-1">
          {Object.keys(sortKeys).map((key) => (
            <button
              key={key}
              onClick={() => changeSort(key)}
              className={classNames(
                "btn-primary",
                sortKey === key ? "translate-y-1" : ""
              )}
            >
              <h1>{key.replace("_", " ")}</h1>
            </button>
          ))}
        </div>

        <div className="md:invisible visible flex flex-row mb-3 justify-center gap-1">
          <button
            className="btn-primary"
            onClick={() => scrollChangeSort(false)}
          >
            {"<"}
          </button>
          <div className="btn-style">{sortKey.replace("_", " ")}</div>
          <button
            className="btn-primary"
            onClick={() => scrollChangeSort(true)}
          >
            {">"}
          </button>
        </div>

        <div className="bg-violet-900/80 px-3 py-3 font-medium flex flex-row text-lg mb-3 shadow-xl rounded">
          <div className="my-auto mx-3 basis-5">
            <div />
          </div>
          <h1 className={sortKey === "MMR" ? "basis-2/4" : "basis-3/4"}>
            Name
          </h1>
          {sortKey === "MMR" && <h1 className="basis-1/4">MMR</h1>}
          <h3 className="basis-1/4">
            {sortKey === "MMR" ? "Win - Loss" : sortKey.replace("_", " ")}
          </h3>
        </div>
        {stats &&
          stats[month] !== undefined &&
          stats[month]
            .sort(
              (a: LooseObject, b: LooseObject) =>
                b?.data[sortKeys[sortKey]] - a?.data[sortKeys[sortKey]]
            )
            .map((player: any, idx: number) => (
              <LeaderboardItem
                key={player.id}
                sortKey={sortKeys[sortKey]}
                rank={idx + 1}
                player={player}
              />
            ))}
      </div>
    </div>
  );
};

export default Leaderboard;
