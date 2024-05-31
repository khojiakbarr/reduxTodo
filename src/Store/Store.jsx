import TodoSlice from "./Slices/TodoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
});

export default store;
