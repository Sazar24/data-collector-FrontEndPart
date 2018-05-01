export const ServerDataReducer = (state = {}, action) => {
    switch (action.type) {
        case "USERS_DATA_RECEIVED":
            return { ...state, users: action.payload.slice() }

        default:
            return { ...state };
    }
}