import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import products from './productRedux';

const rootReducer = combineReducers({ products });

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	),
);

export default store;