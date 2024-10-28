import axios from "axios";

let accessToken =
	"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjUyNDU3OGY1ODA2YTQyZjQ2OGI4MmYwZjZjMGEzNCIsIm5iZiI6MTczMDExNzU4MC4zNTA5NDMsInN1YiI6IjY3MWI4MmYxNWQwZGU4OTA0MmQ5MGIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yYoQ2eiDX3hchOfvX-ylH-2EUs1WBOoxDQfwjf4yw40";

export async function makeRequest(url, params, method = "GET", body = {}) {
	try {
		let res = await axios({
			method: method,
			baseURL: "https://api.themoviedb.org/3",
			url: url,
			headers: {
				accept: "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			params: {
				language: "ru-RU",
				...params,
			},
			body: body,
		});

		return res;
	} catch (error) {
		throw new Error("Ошибка на сервере чувак", error);
	}
}
