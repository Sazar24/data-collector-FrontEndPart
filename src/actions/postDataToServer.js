import axios from 'axios';
import usersDataMock from '../mock/usersDataMock';
import { reduxStore } from '../reducers';

export async function postUserDataToServerMock() {
    // console.log("ten guziczek jeszcze nie działa");

    const mainFormData = reduxStore.getState().formDataReducer;
    console.log(`data from form kept in redux: ${JSON.stringify(mainFormData)}    `);

    //TODO:
    // docelowo: ten button ma wysyłać dane z formularza do serwera.
    try {
        const response = await axios.post("http://localhost:3000/api/users/post", mainFormData);
        console.log('axios post response: ', response);
        
    } catch (err) {
        console.log("axios post error: ", err);
    }

} 