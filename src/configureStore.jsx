import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

export let store;

// function configureStore() {
//   store = createStore(reducers, applyMiddleware(thunk));
//   return store
// }
//
// export default configureStore;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  store = createStore(rootReducer, applyMiddleware(thunk));
  // let persistor = persistStore(store);
  return { store };
};
