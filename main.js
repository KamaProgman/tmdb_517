import Swiper from "swiper";
import "swiper/css";
import { popularApi } from "./api/movie";

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
