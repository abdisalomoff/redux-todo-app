import {createStore} from 'redux';
import { todoReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
    todoReducer,composeWithDevTools()
    // composeWithDevTools(applyMiddleware(thunk)),
    //    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
)