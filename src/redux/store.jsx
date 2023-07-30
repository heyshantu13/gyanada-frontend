// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import loaderReducer from "./loaderSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducers = combineReducers({
  user: userReducer,
  loader:loaderReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export let persistor = persistStore(store);
