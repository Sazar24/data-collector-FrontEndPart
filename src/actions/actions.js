import * as actionTypes from "./actionTypes/actionTypes";

export function saveFormDataByType(text, reducerDataType) {
    return {
        type: actionTypes.MAINFORM_DATA_CHANGE,
        payload: text,
        dataType: reducerDataType
    }
}

export function clearMainForm() {
    return {
        type: actionTypes.CLEAR_MAIN_FORM
    }
}