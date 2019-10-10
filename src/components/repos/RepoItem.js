import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo: { html_url, name } }) => (
	<a href={html_url} target='_blank' rel='noopener noreferrer' className='item'>
		<div className='content'>
			<div className='header'>{name}</div>
		</div>
	</a>
);

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired
};

export default RepoItem;
