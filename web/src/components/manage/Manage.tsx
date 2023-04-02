import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPremium } from "../../services/neatqueue-service";
import globalState, { Guild, PremiumData } from "../../State";
import Credits from "./Credits";
import Instance from "./Instance";
import PremiumStatus from "./PremiumStatus";
import Alert from "../Alert";

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

  if (!guild) {
    return <></>;
  }

  return (
    <>
      <div className="text-center mb-5">
        <h1 className="text-5xl">{guild.name}</h1>
        <Alert value={success} setValue={setSuccess} color="bg-green-600" />
        <Alert value={error} setValue={setError} color="bg-red-600" />
      </div>

      <div className="grid grid-cols-12 mx-32 gap-8">
        {premiumData && guildID && (
          <>
            <PremiumStatus
              premiumData={premiumData}
              setPremiumData={setPremiumData}
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
