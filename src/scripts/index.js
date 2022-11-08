import { renderCardsHome } from "./render.js";
import { getAllPets } from "./requests.js";

const petsProfile = await getAllPets()
console.log(petsProfile)
renderCardsHome(petsProfile)
