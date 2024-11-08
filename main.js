import Swiper from "swiper";
import "swiper/css";

import { getGeners, nowPlayingApi, upcomingApi } from "./api/movie";
import { reload } from "./libs/utils";
import { Movie } from "./components/Movie";
import { PopularPer } from "./api/actor"
import { LeftPartcel } from "./components/LeftPartCelebrity"
import { RightElement } from "./components/RightPatrCel"
import { Genre } from "./components/Genre";
import { header } from "./libs/header";
import { Trailer } from "./components/Trailer";

header()

Promise.all([nowPlayingApi(), upcomingApi(), PopularPer(), getGeners()])
		.then(([nowPlaying, upcoming, popularper,genres]) => {
			reload(
				nowPlaying.data.results.slice(0, 8),
				document.querySelector(".mn_center_item"),
				Movie
			),
				reload(
					upcoming.data.results.slice(0, 4),
					document.querySelector(".pictures"),
					Movie
				),
				reload(
					upcoming.data.results,
					document.querySelector(".trailers_list"),
					Trailer
				),
				reload(popularper.data.results.slice(0, 2),
					document.querySelector('.left_part_popular'),
					LeftPartcel
				),
				reload(popularper.data.results.slice(2,6),
					document.querySelector('.right_part_popular'),
					RightElement
				),
				reload(genres.data.genres.slice(0,6),
				document.querySelector('.top_right_part'),
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
