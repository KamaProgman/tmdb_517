import axios from "axios";

let accessToken =
	"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDExNmY3NmEwZWJjNTQ3NzE5ZTg1NmQ4NmQ5MmY5ZSIsIm5iZiI6MTcyOTM0ODU1MS41MjkyMzgsInN1YiI6IjY2MzYyMjNjNDcwZWFkMDEyMjEyM2UxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VSDYPQCXFklnmVuE5Imj5GFKbr_AAMgrXOZtewdKjgo";

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
