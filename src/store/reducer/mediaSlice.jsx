// src/store/reducer/mediaSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    loadInfo: (state, action) => {
      state.info = action.payload;
    },
    resetInfo: (state) => {
      state.info = null;
    },
  },
});

export const { loadInfo, resetInfo } = mediaSlice.actions;
export default mediaSlice.reducer;
