import { hookstate } from "@hookstate/core";

export type session = {
  auth: Auth;
  user: User;
  guilds: Guild[] | undefined;
  stats: BotStats;
};

export type BotStats = {
  servers: number;
  players: number;
  games: number;
};

export type User =
  | {
      id: string;
      username: string;
      avatar: string;
      discriminator: string;
    }
  | undefined;

export type Guild = {
  permissions: number;
  name: string;
  icon: string;
  id: string;
};

export type Auth = { token_type: string; access_token: string } | undefined;

export type Plan = {
  price: number;
  details: string;
  max_players: number;
  max_queues: number;
  daily_games: number;
};

export type Plans = { [key: string]: Plan };

export type PremiumData = {
  premium:
    | {
        until: number;
        plan: string;
      }
    | undefined;
  credits: number;
  plans: Plans;
};

export type BotStatus = {
  online: boolean;
  shards: number;
};

export const defaultState: session = {
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
