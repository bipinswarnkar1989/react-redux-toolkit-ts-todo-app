import { configureStore } from '@reduxjs/toolkit';

import todoReducer from '../redux/todo/todoSlice';
import userReducer from '../redux/user/userSlice';

export const store = configureStore({
  reducer: {
    todoState: todoReducer,
    userState: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
