import { Chart } from "chart.js/auto";
import { imageBaseUrl } from "../libs/utils";


export function ShowMovie(item) {
	let d = document;
	let profilePic = d.querySelector(".profilePic");
	profilePic.src = `${imageBaseUrl}${item.poster_path}`;
	let bg_image = d.querySelector(".bg_image");
	bg_image.style.backgroundImage = `url(${imageBaseUrl}${item.backdrop_path})`;
	let movie_name = d.querySelectorAll(".movie_name");
	movie_name.forEach((name) => (name.textContent = item.title));
	movie_name.textContent = item.title;
	let mn_name = d.querySelector(".mn_name");
	mn_name.textContent = item.title;
	let orig_name = d.querySelector(".orig_name");
	orig_name.textContent = item.original_title;
	let description = d.querySelector(".description");
	description.textContent = item.overview;

	renderDonutChart(item.vote_average);
}
function renderDonutChart(averageRating = 7) {

	const chartContainer = document.getElementById("ratingChart");

	if (chartContainer) {
		new Chart(chartContainer, {
			type: "doughnut",
			data: {
				datasets: [
					{
						label: "Average Rating",
						data: [averageRating, 10 - averageRating],
						backgroundColor: ["green", "white"],
						hoverBackgroundColor: ["green", "blue"],
					},
				],
			},
			options: {
			responsive: true,
			},
		});
	} else {
		console.error("Chart container not found");
	}
}
