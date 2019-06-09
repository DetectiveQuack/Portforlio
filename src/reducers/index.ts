import { connectRouter, RouterState } from 'connected-react-router/immutable';
import { History } from 'history';
import { combineReducers } from 'redux-immutable';

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history)
});

export interface State {
  router: RouterState
}

export default rootReducer;
