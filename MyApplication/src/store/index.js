import { compose, createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

let middleware = [];

if (true) {
  const createLogger = require('redux-logger').createLogger;
  // const immutableLogger = require('redux-immutable-state-invariant').immutableStateInvariantMiddleware;

  const logger = createLogger({ collapsed: true });
  middleware = [
    ...middleware,
    logger,
  ];

} else {
  middleware = [...middleware];
}

const devToolsExt = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
  ? window.devToolsExtension()
  : f => f;
export function configureStore() {
  return createStore(
    reducers,
    {},
    compose(
      applyMiddleware(...middleware),
      devToolsExt,
    )
  );
}
