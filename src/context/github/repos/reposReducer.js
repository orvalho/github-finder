import { GET_REPOS } from '../../types';

export default (state, action) => {
	switch (action.type) {
		case GET_REPOS:
			return action.payload;
		default:
			return state;
	}
};
