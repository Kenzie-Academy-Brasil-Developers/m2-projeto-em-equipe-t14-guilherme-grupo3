import { renderCardsHome } from "./render.js";

const petsProfile = await getPets()
renderCardsHome(petsProfile)