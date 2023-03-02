/* eslint-disable import/prefer-default-export */
import { legacy_createStore as createStore , compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { logger } from '../middlewares';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

const composedEnhancers = composeAlt(
  applyMiddleware(thunk, logger)
)

export const store = createStore(rootReducer, composedEnhancers);