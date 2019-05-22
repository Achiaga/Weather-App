import { REQUEST_WEATHER, RECEIVE_WEATHER } from '../actions/types';

const INITIAL_STATE = {
    isFetching: false,
    temperature: undefined,
    temperatureMax: undefined,
    temperatureMin: undefined,
    weather: undefined,
    date: undefined,
    pollution: undefined,
    error: undefined,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REQUEST_WEATHER: {
			return {
				...state,
				isFetching: true,
			};
		}
		case RECEIVE_WEATHER: {
			return {
				...state,
				isFetching: false,
				weatherData: action.payload,
			};
		}
		default:
			return state;
	}
};