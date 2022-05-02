import * as discordService from '../services/discord-service';
import * as serverService from '../services/server-service';

export const discordAuth = async (dispatch, token) => {
    const auth = await discordService.discordAuth(token);
    await serverService.setSessionAuth(auth)
    dispatch({
        type: 'AUTH',
        auth
    })
};

export const discordRefresh = async (dispatch, token) => {
    const auth = await discordService.discordRefresh(dispatch, token);
    console.log(auth)
    await serverService.setSessionAuth(auth)
    dispatch({
        type: 'AUTH',
        auth
    })
};

export const discordGetUser = async (dispatch, oauth) => {
    const user = await discordService.discordGetUser(oauth);
    await serverService.setSessionUser(user)
    dispatch({
        type: 'USER',
        user
    })
};

export const discordGetGuilds = async (dispatch, oauth) => {
    const guilds = await discordService.discordGetGuilds(oauth);
    await serverService.setSessionGuilds(guilds)
    dispatch({
        type: 'GUILDS',
        guilds
    })
};
