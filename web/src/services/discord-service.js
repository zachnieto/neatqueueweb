import axios from 'axios';
import {resetSession} from "../actions/server-actions";

const API_BASE = "https://discord.com/api";

export const discordGetUser = async (oauth) => {

    const config = {
        headers: {
            authorization: `${oauth.token_type} ${oauth.access_token}`
        }
    }

    const resp = await axios.get(`${API_BASE}/users/@me`, config)
    return resp.data;
}

export const discordGetGuilds = async (oauth) => {

    const config = {
        headers: {
            authorization: `${oauth.token_type} ${oauth.access_token}`
        }
    }

    const resp = await axios.get(`${API_BASE}/users/@me/guilds`, config)
    return resp.data.filter(guild => (guild.permissions & 0x10));
}
