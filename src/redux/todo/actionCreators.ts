import { AppDispatch } from '../store';
import { setError, setLoading, setTodos } from './todoSlice';

export const setTodosAction = () => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => dispatch(setTodos(json)))
      .catch((error) => dispatch(setError(error)));
  };
};
