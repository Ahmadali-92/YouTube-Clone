import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isOpen: true,
  },
  reducers: {
    toggleMenuBar: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenuBar } = toggleSlice.actions;
export default toggleSlice.reducer;
