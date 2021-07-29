import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import companyReducer from './companyReducer';
import clientReducer from './clientReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  company: companyReducer,
  client: clientReducer,
  app: appReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
