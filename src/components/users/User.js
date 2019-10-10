import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import UsersContext from '../../context/github/users/usersContext';
import Loader from '../layout/Loader';

const User = ({ match }) => {
	const usersContext = useContext(UsersContext);
	const { user, loading, getUser } = usersContext;

	useEffect(() => {
		getUser(match.params.login);
		//eslint-disable-next-line
	}, []);

	if (loading) return <Loader />;

	if (!user) return null;

	const {
		avatar_url,
		html_url,
		name,
		login,
		bio,
		created_at,
		followers
	} = user;

	return (
		<div className='user ui card'>
			<div className='image'>
				<img src={avatar_url} alt='avatar' />
			</div>
			<div className='content'>
				<div className='header'>{name}</div>
				<div className='meta'>
					<a href={html_url} target='_blank' rel='noopener noreferrer'>
						{login}
					</a>
				</div>
				<div className='description'>{bio}</div>
			</div>
			<div className='extra content'>
				<span className='right floated'>
					Joined in {new Date(created_at).getFullYear()}
				</span>
				<span>
					<i className='user icon' />
					{followers} Followers
				</span>
			</div>
		</div>
	);
};

export default withRouter(User);
