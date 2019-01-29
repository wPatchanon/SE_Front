import { createStore, combineReducers } from 'redux';

import { auth } from './reducers';

const reducers = combineReducers({
    auth,
});

const store = createStore(reducers);

export default store;