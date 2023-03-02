/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: "light",
  error: null,
  isLoading: false
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    clearError: (state) => {
      state.error = null
    },
    clearAll: (state) => {
      state.isLoading = false
      state.error = null
    }
  },
});

export const { setLoading, setMode, setError, clearError, clearAll } = uiSlice.actions;

export default uiSlice.reducer;
