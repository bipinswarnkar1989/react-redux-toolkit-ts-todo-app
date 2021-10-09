import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import { store } from '../redux/store';
import { NewTodo } from './NewTodo';

describe('<NewTodo />', () => {
  test('should create todo', async () => {
    render(
      <Provider store={store}>
        <NewTodo />
      </Provider>
    );

    const todoInput = screen.getByRole('textbox');
    const todoSubmitButton = screen.getByRole('button', {
      name: 'Add Todo',
    });

    userEvent.clear(todoInput);
    userEvent.type(todoInput, 'first todo');
    userEvent.clear(todoInput);
    userEvent.type(todoInput, 'testing todo');

    expect(todoInput).toHaveValue('testing todo');

    userEvent.click(todoSubmitButton);

    // const loading = await screen.findByText(/Loading.../i);
    // expect(loading).toBeInTheDocument();

    const status = await screen.findByText(/Todo Added Successfully/i);
    //expect(loading).not.toBeInTheDocument();
    expect(status).toBeInTheDocument();

    await waitForElementToBeRemoved(
      () => screen.queryByText('Todo Added Successfully'),
      {
        timeout: 3000,
      }
    );

    await waitFor(
      () => {
        expect(
          screen.queryByText('Todo Added Successfully', {})
        ).not.toBeInTheDocument();
      },
      {
        timeout: 3000,
      }
    );
  });
});
