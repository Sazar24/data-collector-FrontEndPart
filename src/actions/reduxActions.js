//this file should not be in use, in order to following official documentation and more popular patterns.
// Yet, I leave it here, `cause I still think, my (below) solution/pattern is better and more clear than common use of calling dispatcher directly in Components via its props.
// In short: I believe putting actions in separated (not only to separated files) makes the code more readable.

import { reduxStore } from "../reducers/index";
import * as actionTypes from "./actionTypes/actionTypes";

class ReduxActionsClass {
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

    deleteFromUsersListByID(id) {
        reduxStore.dispatch({
            type: actionTypes.DELETE_FROM_USERLIST,
            payload: id
        })
    }
}

const ReduxActions = new ReduxActionsClass();
export default ReduxActions;
