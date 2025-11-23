import { configureStore, combineReducers } from "@reduxjs/toolkit";
import atmReducer from "../P3/AtmSlice"; 
import { animalApi } from "../P4/apiSlice";

const rootReducer = combineReducers({
  atm: atmReducer,
  [animalApi.reducerPath]: animalApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animalApi.middleware),
});
