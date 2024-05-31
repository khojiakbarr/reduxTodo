import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo = [
        ...state.todo,
        { ...action.payload, id: state.todo.length, completed: false },
      ];
    },

    editTodo: (state, action) => {
      console.log(action);
      state.todo = state.todo.map((todo) => {
        if (todo.id == action.payload.id) {
          return { ...todo, task: action.payload.newTask };
        } else {
          return todo;
        }
      });
    },

    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },

    isCompleted: (state, action) => {
      state.todo = state.todo.map((todo) => {
        if (todo.id == action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    },
  },
});

export const { addTodo, editTodo, deleteTodo, isCompleted } = TodoSlice.actions;
export default TodoSlice.reducer;
