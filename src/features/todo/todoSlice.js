import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "1", text: "Hello world", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { text, id } = action.payload;
      // console.log(action.payload);
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    toggle: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggle } = todoSlice.actions;

export default todoSlice.reducer;
