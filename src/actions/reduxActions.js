import { reduxStore } from "../reducers/index";

class ReduxActionsClass {
    saveData(text, dataType) {
        reduxStore.dispatch({
            type: "PERSONAL_DATA_CHANGE",
            payload: text,
            dataType: dataType
        })
    }

    clearMainForm() {
        reduxStore.dispatch({
            type: "CLEAR_MAIN_FORM"
        })
    }

    addToUsersList(user) {
        reduxStore.dispatch({
            type: "ADD_NEW_USERDATA",
            payload: user
        });
    }

    usersDataDownloaded(usersData) {
        reduxStore.dispatch({
            type: "USERS_DATA_RECEIVED",
            payload: usersData
        });
    }

    deleteFromUsersListByID(id){
        reduxStore.dispatch({
            type: "DELETE_FROM_USERLIST",
            payload: id
        })
    }
}

const ReduxActions = new ReduxActionsClass();
export default ReduxActions;