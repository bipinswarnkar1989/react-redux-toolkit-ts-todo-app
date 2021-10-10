import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';

import './UserItem.css';

import { UserType } from '../../models/user';
import { useAppDispatch } from '../../redux/hooks';
import { delteUserAction } from '../../redux/user/actionCreators';

export const UserItem: FC<UserType> = ({ name, id }) => {
  const dispatch = useAppDispatch();

  return (
    <li className='useritem'>
      <Link className='useritem__name' to={`/todos/${id}`}>
        {name}
      </Link>
      <nav className='useritem__nav'>
        <div>
          <span className='useritem__nav--nav-item'>
            <FaEdit />
          </span>
        </div>
        <div>
          <span
            role='button'
            aria-roledescription='delete user'
            title='delete user'
            onClick={() => dispatch(delteUserAction(id))}
          >
            <FaTrash className='useritem__nav--nav-item' />
          </span>
        </div>
      </nav>
    </li>
  );
};
