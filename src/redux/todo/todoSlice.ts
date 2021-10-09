import { createSlice } from '@reduxjs/toolkit';

import { Todo } from '../../models/todo';

export type todoStateType = {
  todos: Todo[];
  loading: boolean;
  error: string;
  success: string;
};

const initialState: todoStateType = {
  todos: [],
  loading: false,
  error: '',
  success: '',
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo(state, action) {
      state.todos.unshift(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((td) => td.id !== action.payload);
    },
    setTodos(state, action) {
      state.todos = action.payload;
      state.loading = false;
      state.error = '';
    },
    setError(state, action) {
      state.error = action.payload;
      state.success = '';
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSuccess(state, action) {
      state.success = action.payload;
    },
  },
});

export const {
  setTodos,
  createTodo,
  removeTodo,
  setError,
  setLoading,
  setSuccess,
} = todoSlice.actions;
export default todoSlice.reducer;
