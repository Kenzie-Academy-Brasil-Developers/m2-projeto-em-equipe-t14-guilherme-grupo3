import { deleteProfile } from "./requests.js"
import { getLocalStorage, removeStorage } from "./localStorage.js"


/* --------------- CRIA CONTAINER PADRÃO PARA OS MODAIS -------------- */
export const createModalContainer = () => {
    const body = document.querySelector('body')

    const divContainer = document.createElement('div')
    const divModal = document.createElement('div')
    const divHeader = document.createElement('div')
    const button = document.createElement('button')
    const img = document.createElement('img')
    const divContent = document.createElement('div')
    const divFooter = document.createElement('div')

    divContainer.className = 'modal-container'
    divModal.className = 'modal'
    divHeader.className = 'header-modal'
    button.id = 'close-modal'
    img.src = '../images/close.svg'
    divContent.className = 'content-modal'
    divFooter.classList = 'footer-modal'

    divContainer.appendChild(divModal)
    divModal.append(divHeader, divContent, divFooter)
    divHeader.appendChild(button)
    button.appendChild(img)

    body.appendChild(divContainer)

    button.onclick = () => divContainer.remove()

    return divContent
}


/* --------------- CRIA MODAL DE ATUALIZAÇÃO DE PERFIL -------------- */
export const createModalUpdateProfile = () => {
    const modalContainer = createModalContainer()

    modalContainer.insertAdjacentHTML('beforeend',
        `<h2 class='font-brand'>Atualizar perfil</h2>
        <form>
            <input type="text" id="name" placeholder="Nome">
            <input type="text" id="avatar_url" placeholder="Avatar">
            <button class='btn btn-primary'>Atualizar</button>
        </form>
        `
    )
}


/* --------------- CRIA MODAL DE REGISTRO -------------- */
export const createModalRegister = () => {
    const modalContainer = createModalContainer()
    const button = document.querySelector("#close-modal")
    const img = button.firstChild
    img.src = "./src/images/close.svg"

    modalContainer.insertAdjacentHTML('beforeend',
        `<h2 class='font-brand'>Cadastrar</h2>
        <form>
            <input type="text" id="name" placeholder="Nome" required>
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Senha" required>
            <input type="text" id="avatar_url" placeholder="Avatar" required>
            <button type="submit" class='btn btn-primary'>Cadastrar</button>
            <p class="font-gray">Já tem cadastro? <a class="redirect-login">Clique aqui</a> para logar.</p>
        </form>
      `
    )

    const redirect = document.querySelector('.redirect-login')
    const container = document.querySelector('.modal-container')

    redirect.addEventListener('click', () => {
        container.remove()
        createModalLogin()
    })
}


/* --------------- CRIA MODAL DE LOGIN -------------- */
export const createModalLogin = () => {
    const modalContainer = createModalContainer()
    const button = document.querySelector("#close-modal")
    const img = button.firstChild
    img.src = "./src/images/close.svg"

    modalContainer.insertAdjacentHTML('beforeend',
        `<h2 class='font-brand'>Login</h2>
        <form>
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Senha" required>
            <button type="submit" class='btn btn-primary'>Entrar</button>
            <p class="font-gray">Não tem cadastro? <a class="redirect-register">Clique aqui</a> para se cadastrar.</p>
        </form>
      `
    )

    const redirect = document.querySelector('.redirect-register')
    const container = document.querySelector('.modal-container')

    redirect.addEventListener('click', () => {
        container.remove()
        createModalRegister()
    })
}


// ---------------------- MODAL DELETE PROFILE ----------------
export const modalDeleteProfile = () => {
    const modalContainer = createModalContainer()
    const token = getLocalStorage()

    const h2 = document.createElement('h2')
    h2.classList = 'font-brand'
    h2.innerText = 'Deseja mesmo deletar a sua conta?'

    const btnNoDelete = document.createElement('button')
    btnNoDelete.classList = 'btn btn-primary'
    btnNoDelete.innerText = 'Não desejo deletar minha conta'
    btnNoDelete.addEventListener('click', () => {
        document.querySelector('.modal-container').remove()
    })

    const btnDelete = document.createElement('button')
    btnDelete.classList = 'btn btn-line-red'
    btnDelete.innerText = 'Quero deletar minha conta'
    btnDelete.addEventListener('click', async () => {
        await deleteProfile(token)
        removeStorage()
        window.location.replace('/index.html')
    })

    modalContainer.append(h2, btnNoDelete, btnDelete)
}


/* --------------- CRIA MODAL DE REGISTRO PET -------------- */
export const createModalRegisterPet = () => {
    const modalContainer = createModalContainer()
    const button = document.querySelector("#close-modal")
    const img = button.firstChild
    img.src = "/src/images/close.svg"

    modalContainer.insertAdjacentHTML('beforeend',
        `<h2 class='font-brand'>Cadastrar pet</h2>
        <form>
            <input type="text" id="name" placeholder="Nome" required>
            <input type="text" id="bread" placeholder="Raça" required>
            <select required>
            <option selected disabled>Selecione a espécie do pet</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
            <option value="Aves">Aves</option>
            <option value="Repteis">Repteis</option>
            <option value="Outros">Outros</option>
            </select>
            <input type="text" id="avatar_url" placeholder="Avatar" required>
            <button type="submit" class='btn btn-primary'>Cadastrar</button>
        </form>
      `
    )
}


/* --------------- CRIA MODAL DE ATUALIZAÇÃO DE PET -------------- */
export const createModalAttPet = () => {
    const modalContainer = createModalContainer()
    const button = document.querySelector("#close-modal")
    const img = button.firstChild
    img.src = "/src/images/close.svg"

    modalContainer.insertAdjacentHTML('beforeend',
        `<h2 class='font-brand'>Atualizar pet</h2>
        <form>
            <input type="text" id="name" placeholder="Nome" required>
            <select required>
            <option selected disabled>Selecione a espécie do pet</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
            <option value="Aves">Aves</option>
            <option value="Repteis">Repteis</option>
            <option value="Outros">Outros</option>
            </select>
            <input type="text" id="bread" placeholder="Raça" required>
            <input type="text" id="avatar_url" placeholder="Foto do pet" required>
            <button type="submit" class='btn btn-primary'>Atualizar</button>
        </form>
      `
    )
}


/* --------------- CRIA MODAL DE ADOÇÃO DE PET -------------- */
export const createModalAdopt = () => {
    const modalContainer = createModalContainer()
    const button = document.querySelector("#close-modal")
    const img = button.firstChild
    img.src = "/src/images/close.svg"

    modalContainer.insertAdjacentHTML('beforeend',
        `<h2 class='font-brand'>Adotar pet</h2>
        <form>
            <h3>Tem certeza que deseja adotar o pet ?</h3>
            <h4>A responsabilidade do cuidado com o pet passa a ser do guardião, após aceitar.</h4>
            <button type="submit" class='btn btn-primary'>Adotar</button>
        </form>
      `
    )
}

/* --------------- CRIA MODAL DE REMOÇÃO DE PET -------------- */
export const createModalDelete = () => {
    const modalContainer = createModalContainer()
    const button = document.querySelector("#close-modal")
    const img = button.firstChild
    img.src = "/src/images/close.svg"

    modalContainer.insertAdjacentHTML('beforeend',
        `<h2 class='font-brand'>Adotar pet</h2>
        <form>
            <h3>Tem certeza que deseja desistir da adoção?</h3>
            <h4>O pet voltará ao centro de adoções, caso prossiga.</h4>
            <button type="submit" class='btn btn-primary'>Deletar</button>
        </form>
      `
    )
}