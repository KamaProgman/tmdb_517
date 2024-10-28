import Swiper from "swiper";
import "swiper/css";
// import { popularApi } from "./api/movie";

import { nowPlayingApi, popularApi, upcomingApi } from "./api/movie";
import { reload } from "./libs/utils";
import { Movie } from "./components/Movie";

nowPlayingApi()
	.then((res) =>
		reload(
			res.data.results.slice(0, 8),
			document.querySelector(".mn_center_item"),
			Movie
		)
	)
	.catch((error) => console.error(error));

upcomingApi()
	.then((res) =>
		reload(
			res.data.results.slice(0, 4),
			document.querySelector(".pictures"),
			Movie
		)
	)
	.catch((error) => console.error(error));

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
