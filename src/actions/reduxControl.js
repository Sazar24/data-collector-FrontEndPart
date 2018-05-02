import { reduxStore } from "../reducers/index";

class ReduxControlClass {
    saveData(text, dataType) {
        reduxStore.dispatch({
            type: "PERSONAL_DATA_CHANGE",
            payload: text,
            dataType: dataType
        })
    }

}

const ReduxControl = new ReduxControlClass();
export default ReduxControl;