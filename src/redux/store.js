import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./root-reducer";

const initialState = {};

export const store = configureStore({
  reducer: rootReducer,
  initialState,
});

export const persistor = persistStore(store);
