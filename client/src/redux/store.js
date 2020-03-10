import { createStore, combineReducers } from 'redux';

import products from './productRedux';

const rootReducer = combineReducers({ products });

const store = createStore(rootReducer);

export default store;