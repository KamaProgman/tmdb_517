export function UpcomingMovie(item){
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';

    // Create the img element
    const imgElement = document.createElement('img');
    imgElement.src = item.poster_path;
    imgElement.alt = '';

    // Create the title paragraph
    const titleParagraph = document.createElement('p');
    titleParagraph.className = 'white';
    titleParagraph.textContent = item.title;

    // Create the release date paragraph
    const dateParagraph = document.createElement('p');
    dateParagraph.className = 'yellow';
    dateParagraph.textContent = item.original_title;

    // Append img, title, and date to item
    itemDiv.appendChild(imgElement);
    itemDiv.appendChild(titleParagraph);
    itemDiv.appendChild(dateParagraph);

    return itemDiv;
}