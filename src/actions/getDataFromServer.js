import axios from 'axios';
import usersDataMock from '../mock/usersDataMock';
import { reduxStore } from '../reducers';

export function getUsersData_Mock() {
    reduxStore.dispatch({
        type: "USERS_DATA_RECEIVED",
        payload: usersDataMock
    });
}

//async/await nie działa bo babel...
export function getDataFromServer() {
    axios.get('localhost:3000/api/users/getall',
        {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
    )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// }



// export  async function postUserDataToServer() {
//     try {
//         // const response =  axios.get("localhost:3000/api/users/getall"
//         const response = await axios.get("http://localhost:3001/api/password/213"
//             // {
//             //     params: {
//             //         "number": "4",
//             //         "content": "wysłane z frontu :)",
//             //         "author": "cb- front"
//             //     }
//             // }
//         );
//         console.log('it came from Server: ', response);
//     }catch(err){
//         console.log(err);
//         // throw err;

//     }