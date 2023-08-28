import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import User from './userSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedUserReducer = persistReducer(persistConfig, User)

const store = configureStore({
  reducer: {
    User: persistedUserReducer,
  },
})

const persistor = persistStore(store)

export { store, persistor }
