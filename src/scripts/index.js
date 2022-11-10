import { renderCardsHome } from "./render.js";
import { getAllPets } from "./requests.js";
import { registerUser } from "./register.js";

const petsProfile = await getAllPets()

renderCardsHome(petsProfile)
registerUser()
