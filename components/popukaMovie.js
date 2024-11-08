import { reload } from "../libs/utils";

export function Popular_movie(item) {
    
    const mnCenterItem = document.createElement("div");
    mnCenterItem.classList.add("popular_movie");


    const itemDiv = document.createElement("div");
    itemDiv.classList.add("popular_item");


    const imgBox = document.createElement("div");
    imgBox.classList.add("popular_box");


    const img = document.createElement("img");
    img.src = reload + item.poster_path
    img.alt = "movie";


    const rating = document.createElement("span");
    rating.classList.add("reyting-popular");
    rating.textContent = item.vote_average ;


    imgBox.appendChild(img);
    imgBox.appendChild(rating);

    const cinemaName = document.createElement("p");
    cinemaName.classList.add("name_movie_popular");
    cinemaName.textContent = item.title;


    const cinemaGenre = document.createElement("p");
    cinemaGenre.classList.add("gener_movie_popular");
    cinemaGenre.textContent =  item.release_date;


    itemDiv.appendChild(imgBox);
    itemDiv.appendChild(cinemaName);
    itemDiv.appendChild(cinemaGenre);


    mnCenterItem.appendChild(itemDiv);

    return mnCenterItem

}