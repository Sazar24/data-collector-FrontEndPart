import { reduxStore } from "../reducers";
import axios from 'axios';
class ServersApiCallerClass {
    async postUserData() {
        const mainFormData = reduxStore.getState().formDataReducer;
        // console.log(`data from form kept in redux: ${JSON.stringify(mainFormData)}    `);
        try {
            const response = await axios.post("http://localhost:3000/api/users/post", mainFormData);
            console.log('axios post response: ', response);

        } catch (err) {
            console.log("axios post error: ", err);
        }
    }

    async getUsers() {
        const response = await axios.get('http://localhost:3000/api/users/getall');
        console.log(response);
        if (response.data !== undefined)
            reduxStore.dispatch({
                type: "USERS_DATA_RECEIVED",
                payload: response.data
            });
    }
}

const ServersApiCaller = new ServersApiCallerClass();
export default ServersApiCaller;