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
export type InstancePricing = {
  price: number;
  name: string;
};

export type PrivateInstanceState = "running" | "stopped" | "terminated";
export type PrivateInstanceBotState = "online" | "offline";

export type PrivateInstance = {
  id: string;
  instance: PrivateInstanceState;
  bot: PrivateInstanceBotState;
  until: number;
  price: number;
};

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type Session = {
  auth: Auth;
  user: User;
  guilds: Guild[] | undefined;
  stats: BotStats;
};
