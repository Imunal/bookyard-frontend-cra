import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';

import thunk from 'redux-thunk';
import rootReducer from './Reducers';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

export const store = createStore(
  combineReducers({
    router: routerReducer,
    rootReducer,
  }),
  composeWithDevTools(applyMiddleware(routerMiddleware, thunk))
);

export const history = createReduxHistory(store);
