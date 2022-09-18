import { configureStore  , combineReducers} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const appReducer = combineReducers({cart:cartReducer,user:userReducer});
  const rootReducer = (state, action) => {
    if (action.type === 'SIGNOUT_REQUEST') {
      storage.removeItem('persist:root')
      return appReducer(undefined, action)
    }
  
    return appReducer(state, action)
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    // reducer:{
    //     cart:cartReducer,
    //     user:persistedReducer
    // },
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)