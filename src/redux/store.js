
import { createStore } from 'redux'  
import reducer from './reducer'

export default function createReduxStore() {
    return createStore(reducer);
}