import React, { useContext } from 'react';

import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
	const alertContext = useContext(AlertContext);
	const { alert, removeAlert } = alertContext;
	let color;

	if (alert) {
		switch (alert.type) {
			case 'danger':
				color = 'red';
				break;
			default:
				color = 'grey';
		}
	}

	return (
		alert && (
			<div className={`alert ui tertiary inverted ${color} segment`}>
				<div>
					<i className='info circle icon' />
					{alert.msg}
				</div>
				<i className='times circle icon' onClick={removeAlert} />
			</div>
		)
	);
};

export default Alert;
