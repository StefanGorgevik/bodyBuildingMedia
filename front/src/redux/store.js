import { createStore, combineReducers } from 'redux'

import { userReducer } from './reducers/userReducer'
import { dietReducer } from './reducers/dietReducer';

const rootReducer = combineReducers({userReducer, dietReducer})
const store = createStore(rootReducer);

export default store;