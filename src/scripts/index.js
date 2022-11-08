import { renderCardsHome } from "./render.js";
import { getAllPets } from "./requests.js";
import { createModalRegister } from "./modals.js";
import { registerUser } from "./register.js";

const petsProfile = await getAllPets()
// console.log(petsProfile)
renderCardsHome(petsProfile)
registerUser()
