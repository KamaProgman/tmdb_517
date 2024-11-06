import { makeRequest } from "./makeRequest";

export async function nowPlayingApi() {
	try {
		let res = await makeRequest("/movie/now_playing", { page: 1 });

		return res;
	} catch (error) {
		console.error(error);
	}
}

export async function getMovies(params) {
	try {
		let res = await makeRequest(`/discover/movie`, { page: 1, ...params });
		return res;
	} catch (error) {
		console.error(error);
	}
}

export async function getGeners(params) {
	try {
		let res = await makeRequest("/genre/movie/list");
		return res;
	} catch (error) {
		console.error(error);
	}
}
export async function popularApi() {
	try {
		let res = await makeRequest("/movie/popular", { page: 1 });

		return res;
	} catch (error) {
		console.error(error);
	}
}
export async function upcomingApi(params) {
	try {
		let res = await makeRequest("/movie/upcoming", { page: 1 });

		return res;
	} catch (error) {
		console.error(error);
	}
}
export async function getMovieById(id, details = '') {
	try {
		let res = await makeRequest(`/movie/${id}${details == "" ? null : `/${details}`}` );
		return res;
	} catch (error) {
		console.error(error);
	}
}
export async function getMovieTrailers(movie_id) {
	try {
		let res = await makeRequest(`/movie/${movie_id}/videos`, { page: 1 });
		return res;
	} catch (error) {
		console.error(error);
	}

	
}
export async function getStarring(movie_id) {
	try {
		let res = await makeRequest(`/movie/${movie_id}/credits`, { page: 1 });
		return res;
	} catch (error) {
		console.error(error);
	}
}
export async function getPosters(movie_id) {
	try {
		let res = await makeRequest(`/movie/${movie_id}/images`);
		return res;
	} catch (error) {
		console.error(error);
	}
}
export async function getSimilar(movie_id) {
	try {
		let res = await makeRequest(`/movie/${movie_id}/similar`);
		return res;
	} catch (error) {
		console.error(error);
	}
}