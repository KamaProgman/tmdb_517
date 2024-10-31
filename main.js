import Swiper from "swiper";
import "swiper/css";
import { nowPlayingApi, popularApi } from "./api/movie";
import { reload } from "./libs/utils";

const swiper = new Swiper(".swiper", {
	slidesPerView: 4,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
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

popularApi()
	.then((res) => console.log(res.data))
	.catch((error) => console.error(error));

Promise.all([nowPlayingApi(), upcomingApi(), popularApi()])
	.then(([nowPlaying, upcoming, popular]) => {
		reload(
			nowPlaying.data.results.slice(0, 8),
			document.querySelector("mn_center_item"),
			Moive
		)
		reload(
			upcoming.data.results.slice(0, 8),
			document.querySelector(".pictures"),
			Moive
		)
		reload(
			popular.data.results.slice(0, 8),
			document.querySelector(".trailers_list"),
			Moive
		)
	})
	.catch((error) => console.error(error))