export const formDataReducer = (state = {}, action) => {
    switch (action.type) {
        case "PERSONAL_DATA_CHANGE":
            let stateNewValue = {};
            stateNewValue[action.dataType] = action.payload;
            return { ...state, ...stateNewValue }

        default:
            return state;
    }
}
