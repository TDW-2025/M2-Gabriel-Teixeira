import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { pin: "MCTW", balance: 60 },
    { pin: "EI", balance: 3550 },
    { pin: "MEI", balance: 11200 },
  ],
  currentUser: null,
  message: "",
};

export const atmSlice = createSlice({
  name: "atm",
  initialState,
  reducers: {
    login: (state, action) => {
      const idx = state.users.findIndex(u => u.pin === action.payload);
      if (idx !== -1) {
        state.currentUser = idx;
        state.message = `Login bem-sucedido!`;
      } else {
        state.message = "PIN incorreto!";
      }
    },
    logout: (state) => {
      state.currentUser = null;
      state.message = "Logout efetuado!";
    },
    deposit: (state, action) => {
      if (state.currentUser !== null) {
        state.users[state.currentUser].balance += action.payload;
        state.message = `Depósito de ${action.payload}€ efetuado!`;
      } else {
        state.message = "Faça login primeiro!";
      }
    },
    withdraw: (state, action) => {
      if (state.currentUser !== null) {
        const user = state.users[state.currentUser];
        if (user.balance >= action.payload) {
          user.balance -= action.payload;
          state.message = `Levantamento de ${action.payload}€ efetuado!`;
        } else {
          state.message = "Saldo insuficiente!";
        }
      } else {
        state.message = "Faça login primeiro!";
      }
    },
    resetMessage: (state,action) => {
      state.message = "";
      if (state.currentUser === null) {
        state.message = "Faça login primeiro!";
      }
      else if (state.message === action.payload) {
        state.message = "Operação efetuada com sucesso!";
      }
      else {
        state.message = "";
      }

    }
  }
});

export const { login, logout, deposit, withdraw, resetMessage } = atmSlice.actions;
export default atmSlice.reducer;
