import axios from 'axios';


const API_BASE = process.env.REACT_APP_NEATQUEUE_API;

export const getStats = async () => {
    const resp = await axios.get(`${API_BASE}/api/stats`)
    return resp.data;
}

export const getGuildChannelStats = async (guildID, channelID) => {
    const resp = await axios.get(`${API_BASE}/api2/channelstats/${guildID}/${channelID}`)
    return resp.data;
}


export const getGuildQueueChannels = async (guildID) => {
    const resp = await axios.get(`${API_BASE}/api/queuechannels/${guildID}`)
    return resp.data;
}

export const getGuildChannels = async (guildID, oauth) => {
    const config = {
        headers: {
            authorization: `${oauth.token_type} ${oauth.access_token}`
        }
    }

    const resp = await axios.get(`${API_BASE}/api/channels/${guildID}`, config)
    return resp.data;
}

export const getPremium = async (guildID) => {
    const resp = await axios.get(`${API_BASE}/premium/${guildID}`)
    return resp.data;
}

export const purchasePremium = async (guildID, oauth, plan) => {
    const config = {
        headers: {
            authorization: `${oauth.token_type} ${oauth.access_token}`
        }
    }

    const resp = await axios.post(`${API_BASE}/premium/${guildID}/${plan}`, {}, config)
    return resp.data;
}


export async function getBracket(guildID, tournyName) {
    const resp = await axios.get(`${API_BASE}/tournament/${guildID}/${tournyName}`);
    return resp.data
}