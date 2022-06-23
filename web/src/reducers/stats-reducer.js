const statsReducer = (state = {servers: 573, players: 18688, games: 31586}, action) => {
    switch (action.type) {
        case 'GET_STATS':
            return action.stats;
        case 'CHANNEL_LEADERBOARD_DATA':
            return {
                ...state,
                channelStats: action.channelStats
            };
        default:
            return state;
    }
}
export default statsReducer;