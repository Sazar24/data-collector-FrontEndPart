import { PERSONAL_DATA_CHANGE, CLEAR_MAIN_FORM } from "../actions/actionTypes/actionTypes";

export const formDataReducer = (state = {}, action) => {
    switch (action.type) {
        case PERSONAL_DATA_CHANGE:
            let stateNewValue = {}; 
            stateNewValue[action.dataType] = action.payload; 
            return { ...state, ...stateNewValue }

        case CLEAR_MAIN_FORM:
            const empytState = {};
            return { ...empytState };

        default:
            return state;
    }
}
