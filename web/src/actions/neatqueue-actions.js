import * as service from '../services/neatqueue-service';

export const getStats = async (dispatch) => {
    const stats = await service.getStats();
    dispatch({
        type: 'GET_STATS',
        stats
    })
};

export const getGuildChannelStats = async (dispatch, guildID, channelID) => {
    const channelStats = await service.getGuildChannelStats(guildID, channelID);
    dispatch({
        type: 'CHANNEL_LEADERBOARD_DATA',
        channelStats
    })
};

export const getGuildQueueChannels = async (dispatch, guildID) => {
    const queueChannels = await service.getGuildQueueChannels(guildID);
    dispatch({
        type: 'QUEUE_CHANNELS',
        queueChannels
    })
};

export const getGuildChannels = async (dispatch, guildID, oauth) => {
    const guildChannels = await service.getGuildChannels(guildID, oauth);
    dispatch({
        type: 'GUILD_CHANNELS',
        guildChannels
    })
};

export const getPremium = async (guildID) => {
    return await service.getPremium(guildID);
};

export const purchasePremium = async (guildID, oauth, plan) => {
    return await service.purchasePremium(guildID, oauth, plan);
};