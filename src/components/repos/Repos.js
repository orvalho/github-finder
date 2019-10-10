import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import ReposContext from '../../context/github/repos/reposContext';
import RepoItem from './RepoItem';

const Repos = ({ match }) => {
	const reposContext = useContext(ReposContext);
	const { repos, getRepos } = reposContext;

	useEffect(() => {
		getRepos(match.params.login);
		//eslint-disable-next-line
	}, []);

	return (
		!!repos.length && (
			<div className='repos'>
				<h4>Repositories</h4>
				<div className='ui segment'>
					<div className='ui middle aligned selection list'>
						{repos.map(repo => (
							<RepoItem key={repo.id} repo={repo} />
						))}
					</div>
				</div>
			</div>
		)
	);
};

export default withRouter(Repos);
