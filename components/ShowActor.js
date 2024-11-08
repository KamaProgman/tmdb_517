import { imageBaseUrl } from "../libs/utils"

export function ShowActor(item) {
    
    let doc = document
    let img_cel = doc.querySelector('.img_cel')
    img_cel.src = imageBaseUrl + item.profile_path

    let actor_name = doc.querySelectorAll('.actor_name')
    actor_name.forEach((name) => (name.textContent = item.name));
    actor_name.textContent = item.name

    let orig_name = doc.querySelector('.orig_name')
    orig_name.textContent = item.name

    let career = doc.querySelector('.career')
    career.textContent = item.known_for_department

    let height_cel = document.querySelector('.height_cel')
    height_cel.textContent = item.popularity

    let birth_cel = doc.querySelector('.birth_cel')
    birth_cel.textContent = item.birthday
    
    let place_cel = doc.querySelector('.place_cel')
    place_cel.textContent = item.place_of_birth
}