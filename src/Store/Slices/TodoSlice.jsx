import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "../TodoThunks/TodoThunks";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    loading: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = "idle";
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      });
  },
});

export const {} = TodoSlice.actions;
export default TodoSlice.reducer;
