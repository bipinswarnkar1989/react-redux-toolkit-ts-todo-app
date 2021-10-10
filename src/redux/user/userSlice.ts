import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../models/user';

type userStateType = {
  data: UserType[];
  loading: boolean;
  error: string;
  success: string;
};

const initialState: userStateType = {
  data: [],
  loading: false,
  error: '',
  success: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.data = action.payload;
    },
    createUser(state, action) {
      state.data.unshift(action.payload);
    },
    deleteUser(state, action) {
      state.data = state.data.filter((u) => u.id !== action.payload);
    },
    updateUser(state, action) {
      state.data = state.data.map((u) => {
        if (u.id === action.payload.id) {
          u = action.payload;
        }
        return u;
      });
    },
    setLoading(state, action) {
      state.loading = action.payload;
      state.error = '';
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setUsers,
  createUser,
  deleteUser,
  updateUser,
  setLoading,
  setError,
} = userSlice.actions;

export default userSlice.reducer;
