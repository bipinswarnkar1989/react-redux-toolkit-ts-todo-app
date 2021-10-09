import { configureStore } from '@reduxjs/toolkit';

import todoReducer from '../redux/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todoState: todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;