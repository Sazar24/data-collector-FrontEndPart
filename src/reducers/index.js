import {combineReducers, createStore} from 'redux';
import { exampleReducer } from './exampleReducer';

const reducers = combineReducers({
    exampleReducer,
    // here you can put more reducers
})

export const reduxStore = createStore(
    reducers, 
    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // kind of debugging tool (ive tested it so far only with chrome)
)