
import { createStore, applyMiddleware } from 'redux'  
import reducer from './reducer'
import logger from 'redux-logger'

export default function createReduxStore() {
    return createStore(
        reducer,   
        applyMiddleware(logger)
    );
}