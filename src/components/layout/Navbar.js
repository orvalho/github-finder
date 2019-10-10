import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => (
	<div className='navbar ui secondary menu'>
		<Link to='/' className='item'>
			<i className={`${icon} icon`} />
			{title}
		</Link>
		<div className='right menu'>
			<Link to='/' className='item'>
				Home
			</Link>
			<Link to='/about' className='item'>
				About
			</Link>
		</div>
	</div>
);

Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'github'
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Navbar;
