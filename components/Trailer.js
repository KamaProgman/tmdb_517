import { getMovieTrailer } from "../api/movie";
import { imageBaseUrl } from "../libs/utils";

export function Trailer(item) {
	let iframe = document.querySelector("iframe");

	const swiperSlide = document.createElement("div");
	swiperSlide.classList.add("swiper-slide");

	const movieItem = document.createElement("div");
	movieItem.classList.add("movie-item");

	const img = document.createElement("img");
	img.src = imageBaseUrl + item.poster_path;
	img.alt = item.title;

	const playIcon = document.createElement("span");
	playIcon.classList.add("play-icon");
	playIcon.textContent = "▶";

	movieItem.appendChild(img);
	movieItem.appendChild(playIcon);

	const title = document.createElement("h3");
	title.textContent = item.title;

	swiperSlide.append(movieItem, title);

	swiperSlide.onclick = () => {
		getMovieTrailer(item.id)
			.then((res) => {
				let trailer = res.data.results.find((item) => item.type == "Trailer");
				let url = "https://www.youtube.com/embed/" + trailer.key;

				iframe.src = url;
			})
			.catch((error) => console.error(error));
	};

	return swiperSlide;
}
