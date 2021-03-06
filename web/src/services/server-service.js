import axios from 'axios';

const API_BASE = process.env.REACT_APP_SERVER;

const api = axios.create({
    withCredentials: true
});


export const setSessionAuth = async (auth) => {
    const resp = await api.post(`${API_BASE}api/session/set/auth/`, {
        params: {
            auth: auth
        }
    })
    return resp.data;
}

export const setSessionUser = async (user) => {
    const resp = await api.post(`${API_BASE}api/session/set/user/`, {
        params: {
            user: user
        }
    })
    return resp.data;
}

export const setSessionGuilds = async (guilds) => {
    const resp = await api.post(`${API_BASE}api/session/set/guilds/`, {
        params: {
            guilds: guilds
        }
    })
    return resp.data;
}

export const getSession = async () => {
    const resp = await api.get(`${API_BASE}api/session/get`)
    return resp.data;
}

export const endSession = async () => {
    const resp = await api.get(`${API_BASE}api/session/reset`)
    return resp.data;
}

export const requestCheckout = async (userId, userName, guildId, default_price, url) => {
    console.log({
        userId: userId,
        userName: userName,
        guildId: guildId,
        defaultPrice: default_price,
        url: url
    })
    const resp = await api.post(`${API_BASE}checkout`, {
        params: {
            userId: userId,
            userName: userName,
            guildId: guildId,
            defaultPrice: default_price,
            url: url
        }
    })
    return resp.data;
}

export const getProducts = async () => {
    const resp = await api.get(`${API_BASE}products`)
    return resp.data;
}