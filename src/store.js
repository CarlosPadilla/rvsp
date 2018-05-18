import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import inviteReducer from './reducers/inviteReducer';

const rootReducer = combineReducers({
  invite: inviteReducer
});

let composeEnhancers = null;

if (process.env.NODE_ENV === 'development') {
  composeEnhancers = composeWithDevTools(applyMiddleware(thunk));
} else {
  composeEnhancers = applyMiddleware(thunk);
}

export default (initialState) => {
  const store = createStore(rootReducer, initialState, composeEnhancers);
  return store;
};
