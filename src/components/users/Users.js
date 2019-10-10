import React, { useContext } from 'react';

import UsersContext from '../../context/github/users/usersContext';
import UserItem from './UserItem';
import Loader from '../layout/Loader';

const Users = () => {
	const usersContext = useContext(UsersContext);
	const { users, loading } = usersContext;

	if (loading) return <Loader />;

	return (
		!!users.length && (
			<div className='users ui segment'>
				<div className='ui middle aligned selection list'>
					{users.map(user => (
						<UserItem key={user.id} user={user} />
					))}
				</div>
			</div>
		)
	);
};

export default Users;
