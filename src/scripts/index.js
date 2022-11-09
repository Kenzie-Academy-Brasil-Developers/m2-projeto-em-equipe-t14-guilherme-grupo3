import { renderCardsHome } from "./render.js";
import { getAllPets } from "./requests.js";
import { registerUser } from "./register.js";

const petsProfile = await getAllPets()
// console.log(petsProfile)
renderCardsHome(petsProfile)
registerUser()
