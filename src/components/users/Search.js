import React, { useState, useContext } from 'react';

import UsersContext from '../../context/github/users/usersContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
	const usersContext = useContext(UsersContext);
	const alertContext = useContext(AlertContext);
	const { users, searchUsers, clearUsers } = usersContext;
	const { setAlert } = alertContext;
	const [input, setInput] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		if (input.trim() === '') {
			setAlert('Please enter something...', 'danger');
		} else {
			searchUsers(input.trim());
			setInput('');
		}
	};

	return (
		<div className='search ui segment'>
			<form className='ui form' onSubmit={onSubmit}>
				<div className='field'>
					<input
						value={input}
						onChange={e => setInput(e.target.value)}
						placeholder='search users...'
					/>
				</div>
			</form>
			<button className='ui green button' onClick={onSubmit}>
				Search
			</button>
			{!!users.length && (
				<button className='ui red button' onClick={clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
