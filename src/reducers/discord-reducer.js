const discordReducer = (state = {auth: "", user: ""}, action) => {
    switch (action.type) {
        case 'AUTH':
            return {
                ...state,
                auth: action.auth
            };
        case 'USER':
            return {
                ...state,
                user: action.user
            };
        case 'LOGOUT':
            return {auth: "", user: ""}
        default:
            return state;
    }
}

export default discordReducer;