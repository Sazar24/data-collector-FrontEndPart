import axios from 'axios';
// import UsersServiceAction from "../../actions/reduxActions";
import { reduxStore } from '../../reducers';
import UsersServiceActions from './usersActions';

class UsersServiceClass {
    async Add() {
        const mainFormData = reduxStore.getState().formDataReducer;
        try {
            const response = await axios.post("http://localhost:3000/api/users/", mainFormData); // TODO: move to env

            const postedUserId = response.data;
            mainFormData.id = postedUserId;
            UsersServiceActions.addToUsersList(mainFormData);

        } catch (err) {
            console.log("axios.post error: ", err);
        }
    }

    async getUsers() {
        try {
            const response = await axios.get('http://localhost:3000/api/users/');
            if (response.status === 200) {
                UsersServiceActions.usersDataDownloaded(response.data);
            }
        } catch (err) {
            console.log('axios.getUsers error: ', err);
        }

    }

    async deleteRecord(id) {
        try {
            const response = await axios.delete("http://localhost:3000/api/users/" + id)
            if (response.status === 200) {
                UsersServiceActions.deleteFromUsersListByID(id)
            }
        } catch (err) {
            console.log('axios.delete error: ', err);
        }
    }
}

const UsersService = new UsersServiceClass();
export default UsersService;