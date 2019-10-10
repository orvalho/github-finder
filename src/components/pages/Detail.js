import React from 'react';
import { Link } from 'react-router-dom';

import User from '../users/User';
import Repos from '../repos/Repos';

const Detail = () => (
	<div className='detail'>
		<Link to='/' className='ui gray button'>
			<i className='arrow alternate circle left icon' />
			Back to Search
		</Link>
		<div className='container'>
			<User />
			<Repos />
		</div>
	</div>
);

export default Detail;
