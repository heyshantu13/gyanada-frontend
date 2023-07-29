import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    loading: false,
  },
  reducers: {
    showPageLoader: (state,) => {
      state.loading = true;
    },
    hidePageLoader: (state) => {
      state.loading = false;
    },
  },
});

export const { showPageLoader, hidePageLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
