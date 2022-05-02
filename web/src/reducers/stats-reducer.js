const statsReducer = (state = {servers: 500, players: 5000, games: 15000}, action) => {
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