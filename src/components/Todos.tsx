import { FC, useEffect } from 'react';

import { TodoItem } from './TodoItem';

import { removeTodo } from '../redux/todo/todoSlice';
import { useAppDispatch, useAppSelect } from '../redux/hooks';
import { setTodosAction } from '../redux/todo/actionCreators';

export const Todos: FC = () => {
  const dispatch = useAppDispatch();

  const { todos, loading } = useAppSelect((state) => state.todoState);

  useEffect(() => {
    dispatch(setTodosAction());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {todos.map((item) => (
        <TodoItem
          key={item.id + item.title}
          todo={item}
          onRemoveTodo={() => dispatch(removeTodo(item.id))}
        />
      ))}
    </ul>
  );
};
