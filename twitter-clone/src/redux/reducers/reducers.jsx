import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const getTweets = createAsyncThunk("get/tweets", async (tweetobj) => {
  try {
    const response = await axios.post("./userData.json", tweetobj);
    // console.log(response.data.data);
    // setData(response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching tweets:", error);
  }
});

export const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState: {
    // registeredData: persistedState,
    isUserLoggedIn: false,
    loading: false,
    error: null,
    user: {},
    tweetsArray: [],
    tweetObject: {},
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
    tweets: (state, action) => {
      state.tweetObject = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Handle the pending state
    builder.addCase(getTweets.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Handle the fulfilled state
    builder.addCase(getTweets.fulfilled, (state, action) => {
      // console.log(current(action.payload));
      state.loading = false;
      state.tweetsArray = action.payload;
    });

    // Handle the rejected state
    builder.addCase(getTweets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const { loginSuccess, logout, tweets } = loggedInSlice.actions;
export default loggedInSlice.reducer;
