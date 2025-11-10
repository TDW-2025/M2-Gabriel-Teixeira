import { configureStore } from "@reduxjs/toolkit";
import atmReducer from "../aulas/p3/AtmSlice";

export const store = configureStore({
  reducer: {
    atm: atmReducer,
  },
});
