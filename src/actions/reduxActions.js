import { reduxStore } from "../reducers/index";
import * as actionTypes from "./actionTypes/actionTypes";

class ReduxActionsClass {
    saveData(text, dataType) {
        reduxStore.dispatch({
            type: actionTypes.MAINFORM_DATA_CHANGE,
            payload: text,
            dataType: dataType
        })
    }

    clearMainForm() {
        reduxStore.dispatch({
            type: actionTypes.CLEAR_MAIN_FORM
        })
    }

    addToUsersList(user) {
        reduxStore.dispatch({
            type: actionTypes.ADD_NEW_USERDATA,
            payload: user
        });
    }

    usersDataDownloaded(usersData) {
        reduxStore.dispatch({
            type: actionTypes.USERS_DATA_RECEIVED,
            payload: usersData
        });
    }

    deleteFromUsersListByID(id){
        reduxStore.dispatch({
            type: actionTypes.DELETE_FROM_USERLIST,
            payload: id
        })
    }
}

const ReduxActions = new ReduxActionsClass();
export default ReduxActions;