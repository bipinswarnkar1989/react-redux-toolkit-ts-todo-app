import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import { Users } from './Users';

describe('<Users />', () => {
  test('should render users list', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Users />
        </BrowserRouter>
      </Provider>
    );
    const usersHeading = screen.getByText('Users');
    expect(usersHeading).toBeInTheDocument();

    const users = await screen.findAllByRole('listitem');
    expect(users).not.toHaveLength(0);

    expect(users[0]).toHaveTextContent(/Leanne Graham/i);
    expect(users[1]).toHaveTextContent(/Ervin Howell/i);
  });

  test('should delete on click on delete button', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Users />
        </BrowserRouter>
      </Provider>
    );

    const users = await screen.findAllByRole('listitem');
    expect(users).not.toHaveLength(0);

    const userToDelete = users[0];

    const deleteButton = await screen.findAllByRole('button');
    userEvent.click(deleteButton[0]);

    await waitFor(() => {
      expect(userToDelete).not.toBeInTheDocument();
    });
  });
});
