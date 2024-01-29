import { hookstate } from "@hookstate/core";
import { localstored } from '@hookstate/localstored';
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

// @ts-ignore
const globalState = hookstate(defaultState, localstored({key: 'session', engine: sessionStorage}));
export const loadingState = hookstate(true);

export default globalState;
