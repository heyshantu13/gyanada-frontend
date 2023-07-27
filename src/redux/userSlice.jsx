// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null, // Initially, the token will be null or an empty string
    // Add other user-related state properties here if needed
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state) => {
      state.token = null;
    },
    // Add other reducer functions here if needed
  },
});

export const { setToken, logOut } = userSlice.actions;

export default userSlice.reducer;
