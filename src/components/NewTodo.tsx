import { FC, FormEvent, useCallback, useRef } from 'react';

import { apiUrl } from '../mocks/handlers';
import { useAppDispatch, useAppSelect } from '../redux/hooks';
import { createTodo, setLoading, setSuccess } from '../redux/todo/todoSlice';

export const NewTodo: FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const { loading, success } = useAppSelect((state) => state.todoState);

  const createService = useCallback((txt: string) => {
    const payload = {
      title: txt,
      body: txt,
      userId: 1,
    };
    return fetch(`${apiUrl}/todos`, {
      method: 'post',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const enteredText = todoTextInputRef.current!.value;

      if (enteredText.trim().length === 0) {
        return;
      }
      try {
        dispatch(setLoading(true));
        const resp = await createService(enteredText);
        const json = await resp.json();
        dispatch(setLoading(false));
        dispatch(createTodo(json));
        dispatch(setSuccess('Todo Added Successfully'));
        setTimeout(() => {
          dispatch(setSuccess(''));
        }, 3000);
      } catch (error: any) {
        alert(error.message);
      }
    },
    [dispatch, createService]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='text'>Todo text</label>
        <input name='text' type='text' id='text' ref={todoTextInputRef} />
        <button>Add Todo</button>
      </form>

      {success && <span role='status'>{success}</span>}
    </div>
  );
};
