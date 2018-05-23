import { MAINFORM_DATA_CHANGE, CLEAR_MAIN_FORM } from "../actions/actionTypes/actionTypes";

const defaultState = {
    name: '', 
    surname: '',
    town: '',
    email: '',
    date: null
}

export const formDataReducer = (state = {...defaultState}, action) => {
    switch (action.type) {
        case MAINFORM_DATA_CHANGE:
            return { ...state, [action.dataType]: action.payload }

        case CLEAR_MAIN_FORM:
            return defaultState;

        default:
            return state;
    }
}
