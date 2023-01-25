import * as discordService from '../services/discord-service';
import * as serverService from '../services/server-service';


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
