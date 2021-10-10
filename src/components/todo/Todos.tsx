import { FC, Fragment, useEffect } from 'react';
import { useParams } from 'react-router';

import { TodoItem } from './TodoItem';

import { removeTodo } from '../../redux/todo/todoSlice';
import { useAppDispatch, useAppSelect } from '../../redux/hooks';
import { setTodosAction } from '../../redux/todo/actionCreators';
import { NewTodo } from './NewTodo';

export const Todos: FC = () => {
  const dispatch = useAppDispatch();
  const { userid } = useParams<{ userid: string }>();

  const { todos, loading } = useAppSelect((state) => state.todoState);

  useEffect(() => {
    dispatch(setTodosAction(userid));
  }, [dispatch, userid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <h2>Todos</h2>
      <NewTodo />
      <ul>
        {todos?.map((item) => (
          <TodoItem
            key={item.id + item.title}
            todo={item}
            onRemoveTodo={() => dispatch(removeTodo(item.id))}
          />
        ))}
      </ul>
    </Fragment>
  );
};
