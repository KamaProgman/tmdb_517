import { makeRequest } from "./makeRequest";

export async function nowPlayingApi() {
	try {
		let res = await makeRequest("/movie/now_playing", { page: 2 });

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

export async function getMovieTrailer(movie_id) {
	try {
		let res = await makeRequest(`/movie/${movie_id}/videos`, { page: 1 });

		return res;
	} catch (error) {
		console.error(error);
	}
}
