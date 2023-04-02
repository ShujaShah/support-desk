import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

//here we put all the global states to be changed throughout the app
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
