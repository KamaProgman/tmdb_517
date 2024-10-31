import Swiper from "swiper";
import "swiper/css";
import { nowPlayingApi, popularApi, upcomingApi } from "./api/movie";
import { reload } from "./libs/utils";
import { Movie } from "./components/Movie";
import { Trailer } from "./components/Trailer";

Promise.all([nowPlayingApi(), upcomingApi(), popularApi()])
	.then(([nowPlaying, upcoming, popular]) => {
		reload(
			nowPlaying.data.results.slice(0, 8),
			document.querySelector(".mn_center_item"),
			Movie
		);
		reload(
			upcoming.data.results.slice(0, 4),
			document.querySelector(".pictures"),
			Movie
		);
		reload(
			popular.data.results,
			document.querySelector(".trailers_list"),
			Trailer
		);
	})
	.catch((error) => console.error(error));

const swiper = new Swiper(".swiper", {
	slidesPerView: 4,
	freeMode: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1280: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
});
