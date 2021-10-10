import { FC } from 'react';
import { Todo } from '../../models/todo';

type Props = {
  todo: Todo;
  onRemoveTodo: () => void;
};

export const TodoItem: FC<Props> = ({ todo, onRemoveTodo }) => {
  return <li onClick={onRemoveTodo}>{todo.title}</li>;
};
