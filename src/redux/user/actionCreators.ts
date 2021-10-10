import { UserType } from '../../models/user';
import { AppDispatch } from '../store';

import {
  setUsers,
  setError,
  createUser,
  deleteUser,
  updateUser,
} from './userSlice';

export const setUsersAction = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users/');
      if (!resp.ok) {
        throw new Error('Something went wrong');
      }
      const json = await resp.json();
      dispatch(setUsers(json));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };
};

export const createUserAction = (payload: UserType) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users/', {
        method: 'post',
        body: JSON.stringify(payload),
      });
      if (!resp.ok) {
        throw new Error('Something went wrong');
      }
      const json = await resp.json();
      dispatch(createUser(json));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };
};

export const delteUserAction = (payload: UserType['id']) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users/${payload}`,
        {
          method: 'delete',
        }
      );
      if (!resp.ok) {
        throw new Error('Something went wrong');
      }

      dispatch(deleteUser(payload));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };
};

export const updateUserAction = (payload: UserType) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users/${payload.id}`,
        {
          method: 'patch',
          body: JSON.stringify(payload),
        }
      );
      if (!resp.ok) {
        throw new Error('Something went wrong');
      }
      const json = await resp.json();
      dispatch(updateUser(json));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };
};
