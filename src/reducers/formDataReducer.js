import { MAINFORM_DATA_CHANGE, CLEAR_MAIN_FORM } from "../actions/actionTypes/actionTypes";

const defaultState = {
    name: '', 
    surname: '',
    town: ''
}

export const formDataReducer = (state = {...defaultState}, action) => {
    switch (action.type) {
        case MAINFORM_DATA_CHANGE:
            // let stateNewValue = {}; 
            // stateNewValue[action.dataType] = action.payload; 
            return { ...state, [action.dataType]: action.payload }

        case CLEAR_MAIN_FORM:
            // return null;
            return defaultState;

        default:
            return state;
    }
}
