const sessionReducer = (state = {session: ""}, action) => {
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
        case 'LOGOUT':
            return {session: ""}
        default:
            return state;
    }
}
export default sessionReducer;