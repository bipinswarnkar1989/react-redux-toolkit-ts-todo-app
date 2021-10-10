import { FC, Fragment, useEffect } from 'react';

import { UserItem } from './UserItem';

import { useAppDispatch, useAppSelect } from '../../redux/hooks';
import { setUsersAction } from '../../redux/user/actionCreators';

export const Users: FC = () => {
  const dispatch = useAppDispatch();

  const { data, loading } = useAppSelect((state) => state.userState);

  useEffect(() => {
    dispatch(setUsersAction());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <h2>Users</h2>
      <ul>
        {data?.map((item) => (
          <UserItem key={item.id + item.name} {...item} />
        ))}
      </ul>
    </Fragment>
  );
};
