/* --------------- CRIA CONTAINER PADRÃO PARA OS MODAIS -------------- */
export const createModalContainer = (form) => {
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
    img.src = './src/images/close.svg'
    divContent.className = 'content-modal'
    divFooter.classList = 'footer-modal'

    divContainer.appendChild(divModal)
    divContent.appendChild(form)
    divModal.append(divHeader, divContent, divFooter)
    divHeader.appendChild(button)
    button.appendChild(img)

    body.appendChild(divContainer)

    button.onclick = () => divContainer.remove()
    
}

const createModalContainerRegister = () => {
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
            <input type="text" placeholder="Nome">
            <input type="text" placeholder="Email">
            <input type="text" placeholder="Avatar">
            <button class='btn btn-primary'>Atualizar</button>
        </form>
        `
    )
}


// ------------------CRIA MODAL DE REGISTRO--------------------------
export const createModalRegister = () => {

    const buttonRegister = document.querySelector(".button-register")

    buttonRegister.addEventListener("click", function() { 

        const modalContainer = createModalContainerRegister()
        const button = document.querySelector("#close-modal")
        const img = button.firstChild
        img.src = "./src/images/close.svg"

        modalContainer.insertAdjacentHTML('beforeend',
    `<h2 class='font-brand'>Cadastrar</h2>
    <form>
        <input type="text" id="name" placeholder="Nome">
        <input type="email" id="email" placeholder="Email">
        <input type="password" id="password" placeholder="Senha">
        <input type="text" id="avatar_url" placeholder="Avatar">
        <button type="submit" class='btn btn-primary'>Cadastrar</button>
        <p class="font-gray">Já tem cadastro? <a class="redirect-login">Clique aqui</a> para logar.</p>
    </form>
  `
)})

   
}