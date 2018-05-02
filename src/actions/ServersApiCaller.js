import { reduxStore } from "../reducers";
import axios from 'axios';
class ServersApiCallerClass {
    async postUserData() {
        const mainFormData = reduxStore.getState().formDataReducer;

        try {
            const response = await axios.post("http://localhost:3000/api/users/post", mainFormData);
            console.log('axios post response: ', response);

        } catch (err) {
            console.log("axios post error: ", err);
        }
    }

    async getUsers() {
        const response = await axios.get('http://localhost:3000/api/users/getall');
        if (response.data !== undefined)
            reduxStore.dispatch({
                type: "USERS_DATA_RECEIVED",
                payload: response.data
            });
    }

    async deleteRecord(id) {
        try {
            console.log('full adress route.delete: ', 'http://localhost:3000/api/users/delete/' + id);
            const response = await axios.delete('http://localhost:3000/api/users/delete/' + id);
            console.log('axios.delete response: ', response);
            // if (response.code == 200)
            this.getUsers();
        } catch (err) {
            console.log('axios.delete error: ', err);
        }
    }
}

const ServersApiCaller = new ServersApiCallerClass();
export default ServersApiCaller;