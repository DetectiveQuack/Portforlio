import { routerMiddleware } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer, { State } from './reducers';

export const history = createBrowserHistory();

export default function configureStore(preloadedState?: State) {
  const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(routerMiddleware(history)))
  );

  return store;
}
