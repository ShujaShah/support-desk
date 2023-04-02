import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//in slice we create the logic of the reducer to be used in a particular feature

//create initialState
const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};


//Register New User
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
  console.log(user);
});

//Login User
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  console.log(user);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
