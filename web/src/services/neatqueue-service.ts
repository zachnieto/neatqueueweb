import axios from "axios";
import globalState, { Auth, BotStatus } from "../State";

const API_BASE = import.meta.env.VITE_NEATQUEUE_API;

export const getStats = async () => {
  const resp = await axios.get(`${API_BASE}/api/stats`, {timeout: 2000});
  console.log(resp.data);
  globalState.stats.set(resp.data);
};

export const getGuildChannelStats = async (
  guildID: string,
  channelID: string
) => {
  const resp = await axios.get(
    `${API_BASE}/api/leaderboard/${guildID}/${channelID}`
  );
  return resp.data;
};

// export const getGuildQueueChannels = async (guildID) => {
//     const resp = await axios.get(`${API_BASE}/api/queuechannels/${guildID}`)
//     return resp.data;
// }

// export const getGuildChannels = async (guildID, oauth) => {
//     const config = {
//         headers: {
//             authorization: `${oauth.token_type} ${oauth.access_token}`
//         }
//     }

//     const resp = await axios.get(`${API_BASE}/api/channels/${guildID}`, config)
//     return resp.data;
// }

export const getPremium = async (guildID: string) => {
  const resp = await axios.get(`${API_BASE}/premium/${guildID}`);
  return resp.data;
};

export const purchasePremium = async (
  guildID: string,
  oauth: Auth,
  plan: string
) => {
  const config = {
    headers: {
      authorization: `${oauth?.token_type} ${oauth?.access_token}`,
    },
  };

  const resp = await axios.post(
    `${API_BASE}/premium/${guildID}/${plan}`,
    {},
    config
  );
  return resp.data;
};

export async function getBracket(guildID: string, tournyName: string) {
  const resp = await axios.get(
    `${API_BASE}/api/tournament/${guildID}/${tournyName}`
  );
  return resp.data;
}

export async function getLongUrl(shortUrl: string) {
  const resp = await axios.get(`${API_BASE}/api/longurl/${shortUrl}`);
  return resp.data;
}

export async function getStatus() {
  const resp = await axios.get(`${API_BASE}/api/status`, {timeout: 2000});
  const data: BotStatus = resp.data;
  return data;
}
