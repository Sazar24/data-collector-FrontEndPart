import * as actionTypes from "./actionTypes/actionTypes";
import { validatorMark } from "../services/validator/validatorMark";

export function saveFormDataByType(text, reducerDataType) {
    return {
        type: actionTypes.MAINFORM_DATA_CHANGE,
        payload: text,
        dataType: reducerDataType
    }
}

export function saveValidationResult(saveValidationResult, reducerDataType) {
    return {
        type: actionTypes.MAINFORM_DATA_CHANGE,
        payload: saveValidationResult ,
        dataType: reducerDataType + validatorMark
    }
}

export function clearMainForm() {
    return {
        type: actionTypes.CLEAR_MAIN_FORM
    }
}

// export function addToUsersList(user) {
//     return{
//         type: actionTypes.ADD_NEW_USERDATA,
//         payload: user
//     }
// }

// export function usersDataDownloaded(usersData) {
//     return{
//         type: actionTypes.USERS_DATA_RECEIVED,
//         payload: usersData
//     };
// }

// export function deleteFromUsersListByID(id){
//     return {
//         type: actionTypes.DELETE_FROM_USERLIST,
//         payload: id
//     }
// }