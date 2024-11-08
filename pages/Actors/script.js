import { getActorById, getBestFilms, getImageesAcc } from "../../api/movie";
import { ImagesAcc } from "../../components/ImageesActor";
import { Movie } from "../../components/Movie";
import { ShowActor } from "../../components/ShowActor";
import { header } from "../../libs/header";
import { reload } from "../../libs/utils";

header()

let actorId = localStorage.getItem("actorId")

console.log(actorId);

getActorById(actorId)
.then(res => ShowActor(res.data))
.catch(error => console.error(error))

// getBestFilms(actorId)
// .then(res => {
//     reload(
//     res.data.results.slice(0,4),
//     document.querySelector('.mn_block_best_films'),
//     Movie
// )
// })
getImageesAcc(actorId)
.then(res => 
    reload(
    res.data.profiles.slice(0,6),
    document.querySelector(".mn_images_grid"),
    ImagesAcc
))
