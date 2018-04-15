import { reduxStore } from "../reducers/index";

export function changeDisplayedTextAction(text){
    reduxStore.dispatch({
        type: "EXAMPLE_CHANGE_TEXT",
        payload: text
    })
}