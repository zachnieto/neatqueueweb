import axios from "axios";
import globalState from "../State";
import { setSession } from "./server-service";
import { Auth, Guild } from "../types";

const API_BASE = "https://discord.com/api";

export const discordGetUser = async (auth: Auth) => {
  const config = {
    headers: {
      authorization: `${auth?.token_type} ${auth?.access_token}`,
    },
  };
  const resp = await axios.get(`${API_BASE}/users/@me`, config);
  globalState.user.set(resp.data);
  return resp.data;
};

export const discordGetGuilds = async (auth: Auth) => {
  const config = {
    headers: {
      authorization: `${auth?.token_type} ${auth?.access_token}`,
    },
  };

  const resp = await axios.get(`${API_BASE}/users/@me/guilds`, config);
  const guilds = resp.data.filter((guild: Guild) => guild.permissions & 0x10);
  globalState.guilds.set(guilds);
  setSession({
    auth: globalState.auth.get(),
    user: globalState.user.get(),
    guilds: guilds,
  });
};
