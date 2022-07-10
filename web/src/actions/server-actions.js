import * as serverService from '../services/server-service';

export const getSession = async (dispatch) => {
    const session = await serverService.getSession()
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


