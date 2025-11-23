import { configureStore } from "@reduxjs/toolkit";
import atmReducer from "./AtmSlice";

export const store = configureStore({
  reducer: {
    atm: atmReducer,
  },
});
