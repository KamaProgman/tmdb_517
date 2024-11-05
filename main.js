import Swiper from "swiper";
import "swiper/css";

import { getGenres, nowPlayingApi, upcomingApi } from "./api/movie";
import { reload } from "./libs/utils";
import { Movie } from "./components/Movie";
import { PopularPer } from "./api/actor"
import { LeftPartcel } from "./components/LeftPartCelebrity"
import { RightElement } from "./components/RightPatrCel"
import { Popular_movie } from "./components/popukaMovie";
import { Genre } from "./components/Genre";

Promise.all([nowPlayingApi(), upcomingApi(), PopularPer(), getGenres()])
	.then(([nowPlaying, upcoming, PopularPer, genres]) => {
		reload(
			nowPlaying.data.results.slice(0, 8),
			document.querySelector(".mn_center_item"),
			Movie
		);
		reload(
			upcoming.data.results.slice(0, 4),
			document.querySelector(".pictures"),
			Movie
		),
		reload(
			PopularPer.data.results.slice(0,2),
			document.querySelector(".left_part_popular"),
			LeftPartcel
		),
		reload(
			PopularPer.data.results.slice(2,6),
			document.querySelector(".right_part_popular"),
			RightElement
		),
		reload(
			genres.data.genres.slice(0, 6),
			document.querySelector(".top_right_part"),
			Genre
		)
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
