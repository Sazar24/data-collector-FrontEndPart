import {combineReducers, createStore} from 'redux';
import { formDataReducer } from './formDataReducer';

const reducers = combineReducers({
    formDataReducer,
})

export const reduxStore = createStore(
    reducers, 
)

reduxStore.subscribe(() => {
    const reduxStorePrintable = JSON.stringify(reduxStore.getState());
    console.log(reduxStorePrintable);
  });