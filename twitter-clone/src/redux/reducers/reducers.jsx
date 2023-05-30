import { createSlice } from "@reduxjs/toolkit";

export const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState: {
    inUserLoggedIn: false,
  },
  reducers: {
    isUserLoggedIn: (state, action) => {
      state.inUserLoggedIn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { isUserLoggedIn } = loggedInSlice.actions;
export default loggedInSlice.reducer;
