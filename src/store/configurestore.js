import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../store/reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  let middleware;

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(applyMiddleware(thunk));
  } else {
    middleware = applyMiddleware(thunk);
  }

  const store = createStore(rootReducer, initialState, middleware);

  if (module.hot) {
    module.hot.accept('../store/reducers', () => {
      const nextRootReducer = require('../store/reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
