export function Nowplaying(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';

    // Create the img_box div
    const imgBoxDiv = document.createElement('div');
    imgBoxDiv.className = 'img_box';

    // Create the img element
    const imgElement = document.createElement('img');
    imgElement.src = item.poster_path;
    imgElement.alt = 'movie';

    // Create the span for rating
    const ratingSpan = document.createElement('span');
    ratingSpan.className = 'reyting';
    ratingSpan.textContent = item.vote_average;

    // Append img and rating to img_box
    imgBoxDiv.appendChild(imgElement);
    imgBoxDiv.appendChild(ratingSpan);

    // Create the cinema name paragraph
    const nameParagraph = document.createElement('p');
    nameParagraph.className = 'cinema_name';
    nameParagraph.textContent = item.title;

    // Create the cinema genre paragraph
    const genreParagraph = document.createElement('p');
    genreParagraph.className = 'cinema_genre';
    genreParagraph.textContent = item.original_title;

    // Append img_box, name, and genre to item
    itemDiv.appendChild(imgBoxDiv);
    itemDiv.appendChild(nameParagraph);
    itemDiv.appendChild(genreParagraph);

    return itemDiv;
}