import { hookstate } from "@hookstate/core";
import { Session } from "./types";

export const defaultState: Session = {
  auth: undefined,
  user: undefined,
  guilds: undefined,
  stats: {
    servers: -1,
    players: -1,
    games: -1,
  },
};

const globalState = hookstate(defaultState);
export const loadingState = hookstate(true);

export default globalState;
