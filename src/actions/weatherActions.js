import * as actionTypes from "./types"


export const fetchGame = id => async dispatch => {
	try {
        dispatch({ type:  actionTypes.REQUEST_WEATHER, });
        
        const API_KEY = '57f2826191d13aed90ab2d2abd4d2a06';

        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}`)


		const gameInfo = {
			gameName: res.data.data.names.international,
			gameImg: res.data.data.assets['cover-medium'].uri,
			imgs: res.data.data,
		};
		if (resRuns.data.data.length < 1) {
			dispatch({
				type: NO_RECEIVE_GAME,
				payload: { game: { ...gameInfo } },
			});
			return;
		}
		const videosUrl = resRuns.data.data[0].videos.links[0].uri;
		const playerUri = resRuns.data.data[0].players[0].uri;

		const resPlayer = await axios.get(playerUri);

		const runsList = resRuns.data.data;
		const playerData = resPlayer.data.data;

		const playerInfo = {};

		if (playerData.name) {
			playerInfo['name'] = playerData.name;
		}
		if (playerData.names) {
			playerInfo['name'] = playerData.names.international;
		} else {
			playerInfo['name'] = 'No name';
		}
		const runs = {
			game: runsList[0].game,
			category: runsList[0].category,
			date: runsList[0].date,
			comment: runsList[0].comment,
			realtime: runsList[0].times.realtime_t,
		};

		dispatch({
			type: RECEIVE_GAME,
			payload: {
				game: { ...gameInfo },
				runs,
				playerInfo: playerInfo,
				videoUrl: videosUrl,
				error: false,
			},
		});
	} catch (e) {
		dispatch({
			type: ERROR,
			error: true,
		});
	}
};