import * as serverService from '../services/server-service';
import {discordGetUser} from "./discord-actions";

export const getSession = async (dispatch) => {
    const session = await serverService.getSession()
    dispatch({
        type: 'AUTH',
        session: session.auth
    })
    dispatch({
        type: 'SESSION',
        session
    })

    return session
};

export const resetSession = async (dispatch) => {
    await serverService.endSession()
    dispatch({
        type: 'LOGOUT'
    })
};

export const requestCheckout = async (userId, userName, guildId, default_price, url) => {
    return await serverService.requestCheckout(userId, userName, guildId, default_price, url)
}

export const getProducts = async () => {
    return await serverService.getProducts()
}

export const discordAuth = async (dispatch, code) => {
    const auth = await serverService.discordAuth(code)

    await discordGetUser(dispatch, auth)
    dispatch({
        type: "AUTH",
        auth
    })
}



