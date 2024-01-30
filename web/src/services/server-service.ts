import axios from "axios";
import globalState from "../State";
import { discordGetUser } from "./discord-service";
import { Session } from "../types";

const API_BASE = import.meta.env.VITE_NEATQUEUE_API;
const api = axios.create({
  withCredentials: true,
});

export const setSession = async (data: object) => {
  api.post(`${API_BASE}/session`, data);
};

export const getSession = async () => {
  const resp = await api.get(`${API_BASE}/session`);
  const data: Session = resp.data;
  globalState.auth.set(data.auth);
  globalState.user.set(data.user);
  globalState.guilds.set(data.guilds);
};

export const endSession = async () => {
  api.delete(`${API_BASE}/session`);
  globalState.auth.set(undefined);
  globalState.user.set(undefined);
  globalState.guilds.set(undefined);
};

export const requestCheckout = async (
  userId: string,
  userName: string,
  guildId: string,
  price: number,
  url: string
) => {
  const resp = await api.post(`${API_BASE}/checkout`, {
    userId: userId,
    userName: userName,
    guildId: guildId,
    price: price,
    url: url,
  });
  return resp.data;
};

export const discordAuth = async (code: string) => {
  const resp = await api.post(`${API_BASE}/session/auth`, {
    code: code,
  });
  globalState.auth.set(resp.data);
  discordGetUser(resp.data).then((user) => {
    setSession({
      auth: globalState.auth.get(),
      user: user,
      guilds: globalState.guilds.get(),
    });
  });
};
