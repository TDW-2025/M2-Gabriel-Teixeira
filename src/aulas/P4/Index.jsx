import { configureStore } from "@reduxjs/toolkit";
import { animalApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [animalApi.reducerPath]: animalApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animalApi.middleware), 
});
