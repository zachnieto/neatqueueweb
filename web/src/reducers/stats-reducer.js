const statsReducer = (state = {servers: 0, players: 0, games: 0}, action) => {
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