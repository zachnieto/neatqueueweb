import { useHookstate } from "@hookstate/core";
import { useEffect } from "react";
import { discordGetGuilds } from "../services/discord-service";
import globalState from "../State";
import GuildCard from "./GuildCard";

const Dashboard = () => {
  const state = useHookstate(globalState);
  const { auth, guilds } = state.get();

  useEffect(() => {
    if (auth && !guilds) {
      discordGetGuilds(auth);
    }
  }, [auth]);

  return (
    <div className="h-screen">
      {/* {JSON.stringify(guilds)} */}
      <div className="grid grid-cols-5 gap-3 ">
        {guilds &&
          guilds.map((guild) => <GuildCard key={guild.id} guild={guild} />)}
      </div>
    </div>
  );
};

export default Dashboard;
