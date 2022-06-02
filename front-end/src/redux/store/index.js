import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'main',
  storage,
};

const reduxToPersist = persistReducer(persistConfig, rootReducer);

const store = createStore(reduxToPersist, composeWithDevTools());
const persistor = persistStore(store);

export { store, persistor };
