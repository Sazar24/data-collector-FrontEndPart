import usersDataMock from "../mock/usersDataMock";

export const ServerDataReducer = (state = {}, action) => {
    switch (action.type) {
        case "USERS_DATA_RECEIVED":
            return { ...state, users: action.payload.slice() }

        default:
            return { ...state };
    }
}

//
// {
//     "formDataReducer": { },
//     "ServerDataReducer":
//     {
//             "users":
//         [
//             { "id": "1", "name": "Imie1", "surname": "Nazwisko1", "email": "adres@mailowy.pl1", "town": "miasto1" },
//             { "id": "2", "name": "Imie2", "surname": "Nazwisko2", "email": "adres@mailowy.pl2", "town": "miasto2" },
//             { "id": "3", "name": "Imie3", "surname": "Nazwisko3", "email": "adres@mailowy.pl3", "town": "miasto3" }
//         ]
//     }
// }
//