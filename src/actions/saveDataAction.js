import { reduxStore } from "../reducers/index";

export function saveDataAction(text, dataType){
    reduxStore.dispatch({
        type: "PERSONAL_DATA_CHANGE",
        payload: text,
        dataType: dataType
    })
}