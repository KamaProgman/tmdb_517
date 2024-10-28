import axios from "axios";

let accessToken =
	"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjY2MGZiMDc0YzQ3M2UzOTU4N2E4NWI1YzliMmFjOSIsIm5iZiI6MTczMDExNjEyMS41ODcyNDksInN1YiI6IjY3MTkwOTg0YjNkNWNiYjg0MmYzYmZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlrC83qTD2VPeBKChkDmj6pmwd__emo6p6CFsC0VOQE";

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
