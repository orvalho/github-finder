import React, { useReducer } from 'react';

import ReposContext from './reposContext';
import ReposReducer from './reposReducer';
import github from '../../../apis/github';
import { GET_REPOS } from '../../types';

const ReposState = ({ children }) => {
	const initialState = [];
	const [state, dispatch] = useReducer(ReposReducer, initialState);

	const getRepos = async login => {
		const res = await github.get(`/users/${login}/repos`, {
			params: {
				per_page: 3,
				sort: 'created'
			}
		});
		dispatch({ type: GET_REPOS, payload: res.data });
	};

	return (
		<ReposContext.Provider
			value={{
				repos: state,
				getRepos
			}}>
			{children}
		</ReposContext.Provider>
	);
};

export default ReposState;
