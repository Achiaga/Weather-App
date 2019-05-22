import * as actionTypes from "./types"


export const fetchGame = id => async dispatch => {
	try {
        dispatch({ type:  actionTypes.REQUEST_WEATHER, });
        
        const API_KEY = '57f2826191d13aed90ab2d2abd4d2a06';

        // const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}`)
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=${API_KEY}`)
        const data = await api_call.json();

		const weatherInfo = {
            city: data.city.name,
            country: data.city.country,
            temperature: (Number(data.list[0].main.temp) - 273).toFixed(2),
            temperatureMax: (Number(data.list[0].main.temp_max) - 273).toFixed(2),
            temperatureMin: (Number(data.list[0].main.temp_min) - 273).toFixed(2),
            weather: data.list[0].weather[0].description,
            date: data.list[0].dt_txt,
		};
		// if (resRuns.data.data.length < 1) {
		// 	dispatch({
		// 		type: NO_RECEIVE_GAME,
		// 		payload: { game: { ...gameInfo } },
		// 	});
		// 	return;
		// }
		// const videosUrl = resRuns.data.data[0].videos.links[0].uri;
		// const playerUri = resRuns.data.data[0].players[0].uri;

		// const resPlayer = await axios.get(playerUri);

		// const runsList = resRuns.data.data;
		// const playerData = resPlayer.data.data;

		// const playerInfo = {};

		// if (playerData.name) {
		// 	playerInfo['name'] = playerData.name;
		// }
		// if (playerData.names) {
		// 	playerInfo['name'] = playerData.names.international;
		// } else {
		// 	playerInfo['name'] = 'No name';
		// }
		// const runs = {
		// 	game: runsList[0].game,
		// 	category: runsList[0].category,
		// 	date: runsList[0].date,
		// 	comment: runsList[0].comment,
		// 	realtime: runsList[0].times.realtime_t,
		// };

		dispatch({
			type: RECEIVE_GAME,
			payload: {
                weahter: { ...weatherInfo },
                error: false
			},
		});
	} catch (e) {
		dispatch({
			type: ERROR,
			error: true,
		});
	}
};