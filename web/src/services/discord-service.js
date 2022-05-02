import axios from 'axios';
import {resetSession} from "../actions/server-actions";

const API_BASE = "https://discord.com/api";

export const discordAuth = async (token) => {
    const params = new URLSearchParams({
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: token,
        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
        scope: 'identify guilds'
    })

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    const resp = await axios.post(`${API_BASE}/oauth2/token`, params, config)
    return resp.data;
}

export const discordRefresh = async (dispatch, token) => {
    const params = new URLSearchParams({
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        grant_type: 'refresh_token',
        refresh_token: token,
    })

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    const resp = await axios.post(`${API_BASE}/oauth2/token`, params, config).catch(error => resetSession(dispatch))
    return resp.data;
}

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
