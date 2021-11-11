import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import dataSlice from "./dataSlice";

const reducer = combineReducers({
  formData: dataSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({ reducer: persistedReducer });

const persistore = persistStore(store);

export { store, persistore };
