import { REQUEST_GAMES, RECEIVE_GAMES } from '../action/types';
import { REQUEST_WEATHER } from '../actions/types';

const INITIAL_STATE = {
	city: undefined,
	country: undefined,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REQUEST_WEATHER: {
			return {
				...state,
				isFetching: true,
			};
		}
		case RECEIVE_GAMES: {
			return {
				...state,
				isFetching: false,
				gamesData: action.payload,
			};
		}
		default:
			return state;
	}
};