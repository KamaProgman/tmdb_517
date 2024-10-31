import { makeRequest } from "./makeRequest";

export async function PopularPer() {
	try {
		let res = await makeRequest("/person/popular");
        console.log(res);
        

		return res;
	} catch (error) {
		console.error(error);
	}
}