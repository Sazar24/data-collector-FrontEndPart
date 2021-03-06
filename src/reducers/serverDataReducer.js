import { findIndexOfItemByID } from "../services/utilityFunctions/findIndexByID";
import { USERS_DATA_RECEIVED, ADD_NEW_USERDATA, DELETE_FROM_USERLIST } from "../actions/actionTypes/actionTypes";

export const ServerDataReducer = (state = {}, action) => {
    let newUsersData = [];

    switch (action.type) {
        case USERS_DATA_RECEIVED:
            return { ...state, users: action.payload.slice() };

        case ADD_NEW_USERDATA:
            if (state.users !== undefined) newUsersData = state.users.slice();
            newUsersData.push(action.payload);
            return { ...state, users: newUsersData.slice() };

        case DELETE_FROM_USERLIST:
            newUsersData = state.users.slice();

            let indexToBeRemoved;

            indexToBeRemoved = findIndexOfItemByID(action.payload, newUsersData)
            newUsersData.splice(indexToBeRemoved, 1);
            return { ...state, users: newUsersData.slice() };

        default:
            return { ...state };
    }
}
