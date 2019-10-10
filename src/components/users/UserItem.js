import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url } }) => (
	<Link to={`/user/${login}`} className='item'>
		<img className='ui avatar image' src={avatar_url} alt='avatar' />
		<div className='content'>
			<div className='header'>{login}</div>
		</div>
	</Link>
);

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
