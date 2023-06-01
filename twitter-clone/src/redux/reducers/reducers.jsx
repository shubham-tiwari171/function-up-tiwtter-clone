import { createSlice } from "@reduxjs/toolkit";

const persistedState = JSON.parse(localStorage.getItem("myReduxState"));

export const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState: {
    registeredData: persistedState,
    isUserLoggedIn: false,
    user: {},
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isUserLoggedIn = true;
    },
    logout: (state, action) => {
      state.user = {};
      state.isUserLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginSuccess, logout } = loggedInSlice.actions;
export default loggedInSlice.reducer;
