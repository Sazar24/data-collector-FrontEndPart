import { reduxStore } from "../reducers";
import axios from 'axios';
import ReduxActions from "./reduxActions";


class ServersApiCallerClass {
    async postUserData() {
        const mainFormData = reduxStore.getState().formDataReducer;
        try {
            const response = await axios.post("http://localhost:3000/api/users/post", mainFormData); // TODO: move to env
            console.log('axios post response: ', response);
            ReduxActions.addToUsersList(mainFormData);
        } catch (err) {
            console.log("axios.post error: ", err);
        }
    }

    async getUsers() {
        try {
            const response = await axios.get('http://localhost:3000/api/users/getall');
            if (response.status === 200) {
                ReduxActions.usersDataDownloaded(response.data);
            }
        } catch (err) {
            console.log('axios.getUsers error: ', err);
        }

    }

    async deleteRecord(id) {
        try {
            const response = await axios.delete('http://localhost:3000/api/users/delete/' + id);
            console.log('API.delete response: ', response);
            
            if (response.status === 200) {
                ReduxActions.deleteFromUsersListByID(id)
            }

        } catch (err) {
            console.log('axios.delete error: ', err);
        }
    }
}

const ServersApiCaller = new ServersApiCallerClass();
export default ServersApiCaller;