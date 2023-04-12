import axios from "axios";
import globalState from "../State";
import { Auth, BotStatus, InstancePricing, PrivateInstance } from "../types";

const API_BASE = import.meta.env.VITE_NEATQUEUE_API;

export const getStats = async () => {
  const resp = await axios.get(`${API_BASE}/api/stats`, { timeout: 2000 });
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
  const resp = await axios.get(`${API_BASE}/api/status`, { timeout: 2000 });
  const data: BotStatus = resp.data;
  return data;
}

export async function getInstanceTypes() {
  const resp = await axios.get(`${API_BASE}/api/instance/prices`);
  const data: InstancePricing[] = resp.data;
  return data;
}

export async function getInstance(guildID: string, oauth: Auth) {
  const config = {
    headers: {
      authorization: `${oauth?.token_type} ${oauth?.access_token}`,
    },
  };

  const resp = await axios.get(`${API_BASE}/api/instance/${guildID}`, config);
  const data: PrivateInstance | undefined = resp.data;
  return data;
}

export const purchaseInstance = async (
  guildID: string,
  oauth: Auth,
  price: number
) => {
  const config = {
    headers: {
      authorization: `${oauth?.token_type} ${oauth?.access_token}`,
    },
  };

  const resp = await axios.post(
    `${API_BASE}/api/instance/new`,
    {
      price,
      guildID,
    },
    config
  );
  return resp.data;
};

export const extendInstance = async (guildID: string, oauth: Auth) => {
  const config = {
    headers: {
      authorization: `${oauth?.token_type} ${oauth?.access_token}`,
    },
  };

  const resp = await axios.get(
    `${API_BASE}/api/instance/extend/${guildID}`,
    config
  );
  return resp.data;
};

export const startInstance = async (guildID: string, oauth: Auth) => {
  const config = {
    headers: {
      authorization: `${oauth?.token_type} ${oauth?.access_token}`,
    },
  };

  const resp = await axios.get(
    `${API_BASE}/api/instance/start/${guildID}`,
    config
  );
  return resp.data;
};

export const rebootInstance = async (guildID: string, oauth: Auth) => {
  const config = {
    headers: {
      authorization: `${oauth?.token_type} ${oauth?.access_token}`,
    },
  };

  const resp = await axios.get(
    `${API_BASE}/api/instance/reboot/${guildID}`,
    config
  );
  return resp.data;
};

export const stopInstance = async (guildID: string, oauth: Auth) => {
  const config = {
    headers: {
      authorization: `${oauth?.token_type} ${oauth?.access_token}`,
    },
  };

  const resp = await axios.get(
    `${API_BASE}/api/instance/stop/${guildID}`,
    config
  );
  return resp.data;
};

export const deleteInstance = async (guildID: string, oauth: Auth) => {
  const config = {
    headers: {
      authorization: `${oauth?.token_type} ${oauth?.access_token}`,
    },
  };

  const resp = await axios.delete(
    `${API_BASE}/api/instance/${guildID}`,
    config
  );
  return resp.data;
};

export const updateToken = async (
  guildID: string,
  oauth: Auth,
  botToken: string
) => {
  const config = {
    headers: {
      authorization: `${oauth?.token_type} ${oauth?.access_token}`,
    },
  };

  const resp = await axios.put(
    `${API_BASE}/api/instance/updatetoken/${guildID}`,
    {
      token: botToken,
    },
    config
  );
  return resp.data;
};
