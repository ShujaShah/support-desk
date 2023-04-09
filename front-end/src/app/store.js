import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import ticketReducer from "../features/tickets/ticketSlice";

//here we put all the global states to be changed throughout the app
export const store = configureStore({
  reducer: {
    auth: authReducer,
    ticket: ticketReducer,
  },
});
