import { getLocalStorage, removeStorage } from "./localStorage.js"
import { getAllPets } from "./requests.js"

const token = getLocalStorage()

console.log(token)
/* --------------- ENCERRAR A SESSÃO DO USUÁRIO --------------- */
export const logout = () => {
    const btnLogout = document.querySelector('#btn-logout')
    btnLogout.onclick = (event) => {
        event.preventDefault()
        removeStorage()
        window.location.replace('../../index.html')
    }
}


const renderPets = (pets) => {
    console.log(pets)
    const listPets = document.querySelector('main section ul')
    listPets.innerHTML = ''
    pets.forEach(pet => {
        const { avatar_url, species, name, available_for_adoption: available} = pet
        if (available) {
           
            listPets.insertAdjacentHTML('beforeend',
            `<li>
            <img src="${avatar_url}" alt="foto de ${species}">
            <div>
            <h2 class="font-brand">${name}</h2>
            <span class="font-gray">${species}</span>
            </div>
            <button class=" btn btn-green">Me adota?</button>
            </li>
            `
            )
        }
    })


}


/* --------------- VERIFICAR SE O USUÁRIO TEM AUTENTICAÇÃO -------------- */
const verifyPermission = async () => {
    if (token == '' || token == null) {
        window.location.replace('../../index.html')
    } else {
        const pets = await getAllPets()
        renderPets(pets)
        logout()
    }
}
verifyPermission()