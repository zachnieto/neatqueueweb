import axios from "axios";
import globalState, { defaultState } from "../State";
import { discordGetUser } from "./discord-service";
import { Session } from "../types";

const API_BASE = import.meta.env.VITE_SERVER;
const api = axios.create({
  withCredentials: true,
});

export const setSession = async (data: object) => {
  const resp: Session = await api.post(`${API_BASE}api/session/set/`, {
    params: {
      data,
    },
  });
};

export const getSession = async () => {
  const resp = await api.get(`${API_BASE}api/session/get`);
  const data: Session = resp.data;
  globalState.auth.set(data.auth);
  globalState.user.set(data.user);
  globalState.guilds.set(data.guilds);
};

export const endSession = async () => {
  await api.get(`${API_BASE}api/session/reset`);
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
  console.log({
    userId: userId,
    userName: userName,
    guildId: guildId,
    price: price,
    url: url,
  });
  const resp = await api.post(`${API_BASE}checkout`, {
    params: {
      userId: userId,
      userName: userName,
      guildId: guildId,
      price: price,
      url: url,
    },
  });
  return resp.data;
};

export const getProducts = async () => {
  const resp = await api.get(`${API_BASE}products`);
  return resp.data;
};

export const discordAuth = async (code: string) => {
  const resp = await api.post(`${API_BASE}api/session/auth/`, {
    params: {
      code: code,
    },
  });
  globalState.auth.set(resp.data);
  await discordGetUser(resp.data);
  setSession(globalState.value);
};
