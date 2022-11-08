import { getAllPets } from "./requests.js"

// const token = localStorage.getItem('teste')
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5MjIwNzcsImV4cCI6MTY2ODUyNjg3Nywic3ViIjoiN2EyNDRjNmQtZGQyOS00YzI2LThkOGYtZGEzZGI1NDUzY2U4In0.XBdE5HR2bicnsKPDl-4DqaCAyCpNLvdHjs_lqxnhy0E`
localStorage.setItem('teste', '123')


/* --------------- ENCERRAR A SESSÃO DO USUÁRIO --------------- */
export const logout = () => {
    const btnLogout = document.querySelector('#btn-logout')
    btnLogout.onclick = (event) => {
        event.preventDefault()
        localStorage.removeItem('teste')
    }
}


const renderPets = (pets) => {
    console.log(pets)
    const listPets = document.querySelector('main section ul')
    listPets.innerHTML = ''
    pets.data.forEach(pet => {
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
        const pets = await getAllPets(token)
        renderPets(pets)
        logout()
    }
}
verifyPermission()