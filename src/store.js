
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers/index';
import sample_city from './sample-city';

export const history = createHistory();
const middleware = routerMiddleware(history);

const defaultState = {
  city: sample_city,
  currentDay: sample_city[0]
}

const store = createStore(rootReducer, defaultState, applyMiddleware(middleware));

export default store;
