import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import uiReducer from "./uiSlice";
import authReducer from "./authSlice";


const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    ui: uiReducer,
    auth: authReducer,
   
  },
});

export default store;
