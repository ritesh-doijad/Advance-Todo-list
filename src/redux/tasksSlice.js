// src/redux/tasksSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", text: "Buy groceries", completed: false, important: false },
  { id: "2", text: "Finish project report", completed: false, important: true },
  { id: "3", text: "Call the bank", completed: false, important: false },
  { id: "4", text: "Schedule dentist appointment", completed: false, important: false },
  { id: "5", text: "Plan weekend trip", completed: false, important: false },
  { id: "6", text: "Read a book", completed: true, important: false },
  { id: "7", text: "Clean the house", completed: true, important: false },
  { id: "8", text: "Prepare presentation", completed: true, important: false },
  { id: "9", text: "Update blog", completed: true, important: false },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    toggleCompletion: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    toggleImportance: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) task.important = !task.important;
    },
  },
});

export const { addTask, toggleCompletion, toggleImportance } = tasksSlice.actions;
export default tasksSlice.reducer;
