import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../../redux/store';
import { Todos } from './Todos';

describe('<Todos />', () => {
  test('should render todos if request succeds', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Todos />
        </BrowserRouter>
      </Provider>
    );

    const todos = await screen.findAllByRole('listitem');
    expect(todos).not.toHaveLength(0);
    expect(todos[0].innerHTML).toBe('delectus aut autem');
    expect(todos[1]).toHaveTextContent('quis ut nam facilis et officia qui');
  });

  test('should delete on clicking on todo', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Todos />
        </BrowserRouter>
      </Provider>
    );

    const todos = await screen.findAllByRole('listitem');
    expect(todos).not.toHaveLength(0);

    const todoToDelete = todos[0];
    expect(todoToDelete).toHaveTextContent('delectus aut autem');

    userEvent.click(todoToDelete);

    expect(todoToDelete).not.toBeInTheDocument();
  });
});
