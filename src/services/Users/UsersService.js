
import axios from 'axios';
// import dispatch from 'react-redux';
// import { addToUsersList, usersDataDownloaded } from "./actions";
import ReduxActions from "../../actions/reduxActions";
import { reduxStore } from '../../reducers';


class UsersServiceClass {
    async postUserData() {
        const mainFormData = reduxStore.getState().formDataReducer;
        try {
            const response = await axios.post("http://localhost:3000/api/users/", mainFormData); // TODO: move to env

            const postedUserId = response.data;
            mainFormData.id = postedUserId;
            ReduxActions.addToUsersList(mainFormData);

        } catch (err) {
            console.log("axios.post error: ", err);
        }
    }

    async getUsers() {
        try {
            const response = await axios.get('http://localhost:3000/api/users/');
            if (response.status === 200) {
                ReduxActions.usersDataDownloaded(response.data);
            }
        } catch (err) {
            console.log('axios.getUsers error: ', err);
        }

    }

    async deleteRecord(id) {
        try {
            const response = await axios.delete("http://localhost:3000/api/users/"+ id)
            if (response.status === 200) {
                ReduxActions.deleteFromUsersListByID(id)
            }
        } catch (err) {
            console.log('axios.delete error: ', err);
        }
    }
}

const UsersService = new UsersServiceClass();
export default UsersService;