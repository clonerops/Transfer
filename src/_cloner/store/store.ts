import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import  reducers  from './reducers/combineReducers'
import { persistStore } from 'redux-persist';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, compose(
    applyMiddleware(thunk),composeEnhancers()))

export const persistor = persistStore(store);

const exoprt = {
    store, 
    persistStore
}

export default exoprt;