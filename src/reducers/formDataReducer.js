export const formDataReducer = (state = {}, action) => {
    switch (action.type) {
        case "PERSONAL_DATA_CHANGE":
            let stateNewValue = {};
            stateNewValue [action.dataType] = action.payload;

            return {...state, ...stateNewValue} 
        // case "NAME_CHANGE":
        //     return { ...state, name: action.payload }

        // case "SURNAME_CHANGE":
        //     return { ...state, surname: action.payload }

        // case "EMAIL_CHANGE":
        //     return { ...state, email: action.payload }

        // case "TOWN_CHANGE":
        //     return { ...state, town: action.payload }

        // case "DATE_CHANGE":
        //     return { ...state, date: action.payload }

        default:
            return state;
    }
}