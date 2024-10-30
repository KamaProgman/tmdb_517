import { imageBaseUrl } from "../libs/utils";

export function Movie(item) {
	// console.log(item);

	const itemDiv = document.createElement("div");
	itemDiv.className = "item";

	const imgBoxDiv = document.createElement("div");
	imgBoxDiv.className = "img_box";

	const imgElement = document.createElement("img");
	imgElement.src = imageBaseUrl + item.poster_path;
	imgElement.alt = "movie";

	const ratingSpan = document.createElement("span");
	ratingSpan.className = "reyting";
	ratingSpan.textContent = item.vote_average;

	imgBoxDiv.appendChild(imgElement);
	imgBoxDiv.appendChild(ratingSpan);

	const nameParagraph = document.createElement("p");
	nameParagraph.className = "cinema_name";
	nameParagraph.textContent = item.title;

	const genreParagraph = document.createElement("p");
	genreParagraph.className = "cinema_genre";
	genreParagraph.textContent = item.original_title;

	itemDiv.appendChild(imgBoxDiv);
	itemDiv.appendChild(nameParagraph);
	itemDiv.appendChild(genreParagraph);

	return itemDiv;
}
