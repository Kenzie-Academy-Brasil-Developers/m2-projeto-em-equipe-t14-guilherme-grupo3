import { createModalUpdateProfile } from "./modals.js";
import { getPetsUser, getUserProfile, updateProfile } from "./requests.js"
import { getLocalStorage } from "./localStorage.js"

const token = getLocalStorage()

const attUser = () => {

    const button = document.querySelector(".att-profile")

    button.addEventListener("click", async function () {
        createModalUpdateProfile()

        const form = document.querySelector("form")
        const elements = [...form.elements]

        form.addEventListener("submit", async (e) => {
            e.preventDefault()
            const body = {}

            elements.forEach((element) => {
                if (element.tagName == "INPUT" && element.value !== "") {
                    body[element.id] = element.value
                }
            })
            await updateProfile(token, body)
        })
    })
}

const insertPets = async () => {
    const pets = await getPetsUser(token)
    pets.forEach(element => {
        const ul = document.querySelector("ul")
        const li = document.createElement("li")
        const img = document.createElement("img")
        const div = document.createElement("div")
        const nome = document.createElement("p")
        const spanNome = document.createElement("span")
        const spanNomeReal = document.createElement("span")
        const especie = document.createElement("p")
        const spanEspecie = document.createElement("span")
        const spanEspecieReal = document.createElement("span")
        const adopt = document.createElement("p")
        const spanAdopt = document.createElement("span")
        const spanAdoptReal = document.createElement("span")
        const button = document.createElement("button")
        const buttonRegisterPet = document.querySelector(".register-pet")

        if (pets.length > 1) {
            buttonRegisterPet.classList = "register-pet register-pet-margin btn btn-green"
            ul.classList = "display-flex wrap ul-place-center"
        } else {
            buttonRegisterPet.classList = "register-pet btn btn-green"
        }

        li.classList = "display-flex"
        img.classList = "card-image"
        img.src = `${element.avatar_url}`
        div.classList = "display-flex info-pet flex-direction-column justify-evenly"
        spanNome.classList = "font-body-brand"
        spanNome.innerText = 'Nome: '
        spanNomeReal.classList = "font-body-brand"
        spanNomeReal.innerText = `${element.name}`
        spanEspecie.classList = "font-body-brand"
        spanEspecie.innerText = 'Espécie: '
        spanEspecieReal.classList = "font-body-brand"
        spanEspecieReal.innerText = `${element.species}`

        spanAdopt.classList = "font-body-brand"
        spanAdopt.innerText = 'Adotável: '
        spanAdoptReal.classList = "font-body-brand"
        if (element.available_for_adoption == true) {
            spanAdoptReal.innerText = "Sim"
        } else {
            spanAdoptReal.innerText = "Sim"
        }

        button.classList = "btn btn-primary att-pet"
        button.id = `${element.id}`
        button.innerText = "Atualizar"

        nome.append(spanNome, spanNomeReal)
        especie.append(spanEspecie, spanEspecieReal)
        adopt.append(spanAdopt, spanAdoptReal)

        div.append(nome, especie, adopt, button)

        li.append(img, div)

        ul.appendChild(li)
    });

}

const dinamicPage = async () => {
    const user = await getUserProfile(token)
    const main = document.querySelector("main")

    main.insertAdjacentHTML("afterbegin", ` <section class="display-flex background-purple justify-center">
    <img class="profile-image" src="${user.avatar_url}">
</section>
<section class="width-100 display-flex flex-direction-column align-items-center">
    <div class="profile-information display-flex flex-direction-column justify-between">
        <h2 class="font-brand text-align-center">Dados pessoais</h2>
        <p><span class="font-body-brand">Nome:</span> <span class="font-body-black">${user.name}</span></p>
        <p><span class="font-body-brand">E-mail:</span> <span class="font-body-black">${user.email}</span></p>
        <div class="display-flex profile-buttons-div">
            <button class="btn btn-primary att-profile" type="button">Atualizar informações</button>
            <button class="btn btn-line-red delete-profile" type="button">Deletar conta</button>
        </div>
    </div>
</section>
<section class="pets-section display-flex flex-direction-column">
    <div>
        <button class="register-pet btn btn-green" type="button">Cadastrar novo pet</button>
    </div>
    <ul class="display-flex wrap">
    </ul>
`)

    insertPets()
    attUser()

}



dinamicPage()
