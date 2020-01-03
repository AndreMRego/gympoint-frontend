import { persistReducer } from 'redux-persist';
import expireReducer from 'redux-persist-expire';
import storage from 'redux-persist/lib/storage';

export default reducers => {
  const resetAuth = expireReducer('auth', {
    persistedAtKey: 'loadedAt',
    expireSeconds: 60 * 60,
  });

  const persistedReducer = persistReducer(
    {
      key: 'gympoint',
      storage,
      whitelist: ['auth'],
      transforms: [resetAuth],
    },
    reducers
  );

  return persistedReducer;
};
