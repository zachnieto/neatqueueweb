const sessionReducer = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case 'SESSION':
            return action.session;
        case 'AUTH':
            return {
                ...state,
                auth: action.auth
            }
        case 'USER':
            return {
                ...state,
                user: action.user
            }
        case 'GUILDS':
            return {
                ...state,
                guilds: action.guilds
            }
        case 'GUILD':
            return {
                ...state,
                guild: action.guild
            }
        case 'QUEUE_CHANNELS':
            return {
                ...state,
                queueChannels: action.queueChannels
            }
        case 'GUILD_CHANNELS':
            return {
                ...state,
                guildChannels: action.guildChannels
            }
        case 'LOGOUT':
            return {}
        default:
            return state;
    }
}
export default sessionReducer;