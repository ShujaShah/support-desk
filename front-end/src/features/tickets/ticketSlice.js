import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketService from "./ticketService";

const initialState = {
  tickets: [], //for multiple tickets
  ticket: {}, //for single ticket
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//create new ticket
export const createTicket = createAsyncThunk("tickets/create", async (ticketData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token; //get the token from the local storage using thunk
    return await ticketService.createTicket(ticketData, token);
  } catch (error) {
    const message =
      error.response.data.error ||
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTicket.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.isLoading = false; 
        state.isError = true; 
        state.message = action.payload
      });
  },
});

export const { reset } = ticketSlice.actions;
export default ticketSlice.reducer;
