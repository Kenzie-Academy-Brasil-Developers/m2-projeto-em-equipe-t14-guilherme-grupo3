import { createModalUpdateProfile, createModalRegisterPet,modalDeleteProfile, createModalAttPet } from "./modals.js";
import { getPetsUser, getUserProfile, updateProfile, createPet, updatePet, getMyAdoptions } from "./requests.js"
import { getLocalStorage, removeStorage } from "./localStorage.js"
import { toast } from "./toasts.js";

export const logoutProfile = () => {
    const btnLogout = document.querySelector('#btn-logout')
    btnLogout.onclick = (event) => {
        event.preventDefault()
        removeStorage()
        window.location.replace('../../index.html')
    }
}

logoutProfile()

const token = getLocalStorage()

const attUser = () => {

    const button = document.querySelector(".att-profile")
    
    button.addEventListener("click", async function () {
        createModalUpdateProfile()
        const modal = document.querySelector(".modal-container")
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
            await dinamicPage()
            modal.remove()
        })
    })
}

const modalRegisterPet = (button) => {

    button.addEventListener('click', (event) => {
        event.preventDefault()
        createModalRegisterPet()
        const modal = document.querySelector('.modal-container')
        const form = document.querySelector('form')
        const select = document.querySelector('select')


        const [...formElements] = form

        const body = {}

        select.addEventListener('change', (event) => {
            body['species'] = event.target.value
        })

        form.addEventListener('submit', async (iten) => {
            iten.preventDefault()

            formElements.forEach(element => {

                if (element.tagName === "INPUT" && element.value !== "") {
                    body[element.id] = element.value
                }
            })

            await createPet(token, body)
            toast("success", "Criado com sucesso, atualizando...")
            modal.remove()
            setTimeout(() => {
                const adopted = document.querySelector(".adopted-pets").childNodes
                const created = document.querySelector(".created-pets").childNodes
                const arrayAdopted = [... adopted]
                const arrayCreated = [... created]
                arrayAdopted.forEach(element => 
                    element.remove()
                );
                arrayCreated.forEach(element => 
                   element.remove()
               );
                insertPets()
                insertAdoptedPets()
            }, 4000);
        
        })
    })
}

const insertPets = async () => {
    const array = await getPetsUser(token)
    const adoptedPets = array.filter(element => element.available_for_adoption == false )
    const pets = array.filter(element => element.available_for_adoption == true )

    pets.forEach(element => {
        const ul = document.querySelector(".created-pets")
        const textList = document.querySelector(".text-list")
        const textAdopt = document.querySelector(".text-adopt")
        const li = document.createElement("li")
        const img = document.createElement("img")
        const div = document.createElement("div")
        const nome = document.createElement("p")
        const spanNome = document.createElement("span")
        const spanNomeReal = document.createElement("span")
        const especie = document.createElement("p")
        const spanEspecie = document.createElement("span")
        const spanEspecieReal = document.createElement("span")
        const bread = document.createElement("p")
        const spanBread = document.createElement("span")
        const spanBreadReal = document.createElement("span")
        const adopt = document.createElement("p")
        const spanAdopt = document.createElement("span")
        const spanAdoptReal = document.createElement("span")
        const button = document.createElement("button")
        const buttonRegisterPet = document.querySelector(".register-pet")

        if (pets.length > 1 || adoptedPets.length > 1) {

            buttonRegisterPet.classList = "register-pet register-pet-margin btn btn-green"
            ul.classList = "display-flex wrap created-pets ul-place-center"
            textList.classList = "text-list register-pet-margin"
            textAdopt.classList = "text-adopt register-pet-margin"
        } else {
            buttonRegisterPet.classList = "register-pet btn btn-green"
            textList.classList = "text-list"
            textAdopt.classList = "text-adopt"
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
        spanBread.classList = "font-body-brand"
        spanBread.innerText = 'Raça: '
        spanBreadReal.classList = "font-body-brand"
        spanBreadReal.innerText = `${element.bread}`

        spanAdopt.classList = "font-body-brand"
        spanAdopt.innerText = 'Adotável: '
        spanAdoptReal.classList = "font-body-brand"
        if (element.available_for_adoption == true) {
            spanAdoptReal.innerText = "Sim"
        } else {
            spanAdoptReal.innerText = "Não"
        }

        button.classList = "btn btn-primary att-pet"
        button.id = `${element.id}`
        button.innerText = "Atualizar"

        nome.append(spanNome, spanNomeReal)
        especie.append(spanEspecie, spanEspecieReal)
        adopt.append(spanAdopt, spanAdoptReal)
        bread.append(spanBread, spanBreadReal)

        div.append(nome, especie, bread, adopt, button)

        li.append(img, div)

        ul.appendChild(li)
    });
    attPet()
    deleteModal()
}

const insertAdoptedPets = async () => {
    const pets = await getPetsUser(token)
    const createdPets = pets.filter(element => element.available_for_adoption == true )
    const adoptedPets = pets.filter(element => element.available_for_adoption == false )
    const buttonRegister = document.querySelector(".register-pet")

    adoptedPets.forEach(element => {
        const ul = document.querySelector(".adopted-pets")
        const textList = document.querySelector(".text-adopt")
        const textCreated = document.querySelector(".text-list")
        const li = document.createElement("li")
        const img = document.createElement("img")
        const div = document.createElement("div")
        const nome = document.createElement("p")
        const spanNome = document.createElement("span")
        const spanNomeReal = document.createElement("span")
        const especie = document.createElement("p")
        const spanEspecie = document.createElement("span")
        const spanEspecieReal = document.createElement("span")
        const bread = document.createElement("p")
        const spanBread = document.createElement("span")
        const spanBreadReal = document.createElement("span")

        if (adoptedPets.length > 1 || createdPets.length > 1) {
            buttonRegister.classList = "register-pet register-pet-margin btn btn-green"
            ul.classList = "display-flex wrap adopted-pets ul-place-center"
            textList.classList = "text-adopt register-pet-margin"
            textCreated.classList = "text-list register-pet-margin"
            
        } else {
            buttonRegister.classList = "register-pet btn btn-green"
            textList.classList = "text-adopt"
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
        spanBread.classList = "font-body-brand"
        spanBread.innerText = 'Raça: '
        spanBreadReal.classList = "font-body-brand"
        spanBreadReal.innerText = `${element.bread}`


        nome.append(spanNome, spanNomeReal)
        especie.append(spanEspecie, spanEspecieReal)
        bread.append(spanBread, spanBreadReal)

        div.append(nome, especie, bread)

        li.append(img, div)

        ul.appendChild(li)
    });
}

const dinamicPage = async () => {
    const user = await getUserProfile(token)
    const main = document.querySelector("main")
    main.innerHTML = ''

    let baseImg = document.createElement('p')
    baseImg.innerText = 'https://imagemLegal.com'

    if (user.avatar_url === baseImg.innerText) {
        user.avatar_url = '/src/images/avatar_default.jpg'
    }


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
    <h2 class="text-list">Pets Cadastrados</h2>
    <ul class="display-flex wrap created-pets">
    </ul>
    <h2 class="text-adopt">Pets Adotados</h2>
    <ul class="display-flex wrap adopted-pets">
    </ul>
`)

const registerNewPet = document.querySelector('.register-pet')
    
    insertPets()
    insertAdoptedPets()
    attUser()
    modalRegisterPet(registerNewPet)

}


await dinamicPage()

function deleteModal() {
    const btnDeleteModal = document.querySelector('.delete-profile')
    btnDeleteModal.addEventListener('click', ()=>{
            modalDeleteProfile()
    })
}



const attPet = () => {
    const button = document.querySelectorAll(".att-pet")

    button.forEach(element => {

        element.addEventListener("click", function() {
            createModalAttPet()
            
            const body = {}
            const form = document.querySelector("form")
            const elements = [...form.elements]
            const select = document.querySelector('select')
            console.log(form)
            select.addEventListener('change', (event) => {
                body['species'] = event.target.value
            })

            form.addEventListener("submit", async (e) => {
                e.preventDefault()

        
                elements.forEach((elemento) => {
                    if(elemento.tagName == "INPUT" && elemento.value !== "") {
                        body[elemento.id] = elemento.value
                    }
                })

                 await updatePet(token, element.id, body)
                 
                 const modal = document.querySelector(".modal-container")
                 modal.remove()
                 setTimeout(() => {
                     const adopted = document.querySelector(".adopted-pets").childNodes
                     const created = document.querySelector(".created-pets").childNodes
                     const arrayAdopted = [... adopted]
                     const arrayCreated = [... created]
                     arrayAdopted.forEach(element => 
                         element.remove()
                     );
                     arrayCreated.forEach(element => 
                        element.remove()
                    );
                     insertPets()
                     insertAdoptedPets()
                 }, 4000);

            })
        })
        
    });
}
