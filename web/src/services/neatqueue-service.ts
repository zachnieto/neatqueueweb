import axios from 'axios';
import globalState, { Auth } from '../State';

const API_BASE = import.meta.env.VITE_NEATQUEUE_API;

export const getStats = async () => {
    const resp = await axios.get(`${API_BASE}/api/stats`)
    console.log(resp.data);
    globalState.stats.set(resp.data);
}

export const getGuildChannelStats = async (guildID: string, channelID: string) => {
    const resp = await axios.get(`${API_BASE}/api2/channelstats/${guildID}/${channelID}`)
    return resp.data;
}


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
    const resp = await axios.get(`${API_BASE}/premium/${guildID}`)
    return resp.data;
}

export const purchasePremium = async (guildID: string, oauth: Auth, plan: string) => {
    const config = {
        headers: {
            authorization: `${oauth?.token_type} ${oauth?.access_token}`
        }
    }

    const resp = await axios.post(`${API_BASE}/premium/${guildID}/${plan}`, {}, config)
    return resp.data;
}


// export async function getBracket(guildID, tournyName) {
//     const resp = await axios.get(`${API_BASE}/tournament/${guildID}/${tournyName}`);
//     return resp.data
// }

// export async function getLongUrl(shortUrl) {
//     const resp = await axios.get(`${API_BASE}/api/longurl/${shortUrl}`);
//     return resp.data
// }