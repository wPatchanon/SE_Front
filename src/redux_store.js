import { createStore, combineReducers } from 'redux';

import { auth, search } from './reducers';

const reducers = combineReducers({
    auth,
    search,
});

const store = createStore(reducers);

export default store;