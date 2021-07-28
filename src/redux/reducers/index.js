import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import companyReducer from './companyReducer';
import addressReducer from './addressReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  company: companyReducer,
  address: addressReducer,
  app: appReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
