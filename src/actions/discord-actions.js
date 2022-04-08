import * as service from '../services/discord-service';

export const discordAuth = async (dispatch, token) => {
    const auth = await service.discordAuth(token);
    dispatch({
        type: 'AUTH',
        auth
    })
};

export const discordGetUser = async (dispatch, oauth) => {
    const user = await service.discordGetUser(oauth);
    dispatch({
        type: 'USER',
        user
    })
};