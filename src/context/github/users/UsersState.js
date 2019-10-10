import React, { useReducer } from 'react';

import UsersContext from './usersContext';
import UsersReducer from './usersReducer';
import github from '../../../apis/github';
import { SEARCH_USERS, GET_USER, CLEAR_USERS, SET_LOADING } from '../../types';

const UsersState = ({ children }) => {
	const initialState = {
		users: [],
		user: null,
		loading: false
	};
	const [state, dispatch] = useReducer(UsersReducer, initialState);

	const searchUsers = async login => {
		setLoading();
		const res = await github.get('/search/users', {
			params: {
				q: login
			}
		});
		dispatch({ type: SEARCH_USERS, payload: res.data.items });
	};

	const getUser = async login => {
		setLoading();
		const res = await github.get(`/users/${login}`);
		dispatch({ type: GET_USER, payload: res.data });
	};

	const clearUsers = () => dispatch({ type: CLEAR_USERS });

	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<UsersContext.Provider
			value={{
				users: state.users,
				user: state.user,
				loading: state.loading,
				searchUsers,
				getUser,
				clearUsers
			}}>
			{children}
		</UsersContext.Provider>
	);
};

export default UsersState;
