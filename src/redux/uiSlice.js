import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTask: null,
  showSidebar: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
      state.showSidebar = true;
    },
    closeSidebar: (state) => {
      state.selectedTask = null;
      state.showSidebar = false;
    },
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { setSelectedTask, closeSidebar, toggleSidebar } = uiSlice.actions;
export default uiSlice.reducer;
