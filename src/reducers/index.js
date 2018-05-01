import {combineReducers, createStore} from 'redux';
import { formDataReducer } from './formDataReducer';
import { ServerDataReducer } from './serverDataReducer';

const reducers = combineReducers({
    formDataReducer,
    ServerDataReducer
    
})

export const reduxStore = createStore(
    reducers, 
)

reduxStore.subscribe(() => {
    const reduxStorePrintable = JSON.stringify(reduxStore.getState());
    console.log("reduxStore-content has changed: ", reduxStore.getState());
  });