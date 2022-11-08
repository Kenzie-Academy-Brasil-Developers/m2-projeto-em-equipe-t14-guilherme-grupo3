import { createModalContainer } from "./modals.js";

function loginModal () {
    const loginBtn = document.querySelector('.btn-primary')

    let form = document.createElement('form')

    let pTitle = document.createElement('p')
    pTitle.innerText = 'Login'

    let inputEmail = document.createElement('input')
    inputEmail.id = 'email'
    inputEmail.type = 'email'
    inputEmail.placeholder = 'E-mail'

    let inputPassword = document.createElement('input')
    inputPassword.id = 'password'
    inputPassword.type = 'password'
    inputPassword.placeholder = 'Senha'

    let button = document.createElement('button')
    button.type = 'submit'
    button.innerText = 'Entrar'

    let p = document.createElement('p')
    p.innerText = `Não tem cadastro? Clique aqui para se cadastrar.`

    form.append(pTitle, inputEmail, inputPassword, button, p)

    loginBtn.addEventListener('click', () => {
        createModalContainer(form)
    })

    const formElements = [...form]

    form.addEventListener('submit', async (iten) => {
        iten.preventDefault()

        const body = {}

        formElements.forEach(element => {

            if(element.tagName === "INPUT" && element.value !== "") {
                body[element.id] = element.value
            }
        })
    })
}

loginModal()