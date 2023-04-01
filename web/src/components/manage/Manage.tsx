import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPremium } from "../../services/neatqueue-service";
import globalState, { Guild, PremiumData } from "../../State";
import Credits from "./Credits";
import Instance from "./Instance";
import PremiumStatus from "./PremiumStatus";

const Manage = () => {
  const { guildID } = useParams();
  const state = useHookstate(globalState);
  const [guild, setGuild] = useState<Guild>();
  const [premiumData, setPremiumData] = useState<PremiumData>();

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  useEffect(() => {
    if (guildID) {
      getPremium(guildID).then(setPremiumData);
      setGuild(state.guilds.get()?.find((g) => g.id == guildID));
    }

    console.log(guild);
    console.log(premiumData);
  }, [state.guilds]);

  // if (!guild) {
  //     return <></>
  // }

  return (
    <>
      <div className="text-center mb-5">
        {/* <h1 className="text-5xl">{guild.name}</h1>   */}
        <h1 className="text-5xl">NeatQueue Hub</h1>
        {error && (
          <h1 className="text-3xl bg-red-600 rounded p-1 mx-4">{error}</h1>
        )}
        {success && (
          <h1 className="text-3xl bg-green-500 rounded p-1 mx-4">{success}</h1>
        )}
      </div>

      <div className="grid grid-cols-12 mx-32 gap-8">
        {/* {premiumData && <Premium premiumData={premiumData} />} */}

        {premiumData && guildID && (
          <>
            <PremiumStatus
              premiumData={premiumData}
              guildID={guildID}
              setError={setError}
              setSuccess={setSuccess}
            />
            <Credits premiumData={premiumData} guildID={guildID} />
            <Instance />
          </>
        )}
      </div>
    </>
  );
};

export default Manage;
