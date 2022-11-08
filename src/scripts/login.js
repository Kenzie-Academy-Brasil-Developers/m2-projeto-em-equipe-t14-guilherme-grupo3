import { setLocalStorage } from "./localStorage.js";
import { createModalContainer } from "./modals.js";
import { login } from "./requests.js";

function loginModal() {
    const loginBtn = document.querySelector('.btn-primary')

    let form = document.createElement('form')

    let pTitle = document.createElement('p')
    pTitle.innerText = 'Login'

    let inputEmail = document.createElement('input')
    inputEmail.id = 'email'
    inputEmail.type = 'email'
    inputEmail.placeholder = 'E-mail'
    inputEmail.required = 'true'

    let inputPassword = document.createElement('input')
    inputPassword.id = 'password'
    inputPassword.type = 'password'
    inputPassword.placeholder = 'Senha'
    inputPassword.required = 'true'
    
    let button = document.createElement('button')
    button.type = 'submit'
    button.innerText = 'Entrar'

    let p = document.createElement('p')
    p.innerText = `Não tem cadastro? Clique aqui para se cadastrar.`

    form.append(pTitle, inputEmail, inputPassword, button, p)

    loginBtn.addEventListener('click', (event) => {
        event.preventDefault()
        createModalContainer(form)
    })

    const formElements = [...form]

    form.addEventListener('submit', async (iten) => {
        iten.preventDefault()

        const body = {}

        formElements.forEach(element => {

            if (element.tagName === "INPUT" && element.value !== "") {
                body[element.id] = element.value
            }
        })
        
        const response = await login(body)
        
        if(response == 'Email not found' || response == 'please inform a valid email format'){
            console.log('Email não encontrado!')
        } else if(response == 'Please verify the informed password and try again'){
            console.log('Senha inválida!')
        } else{
            // console.log(response)
            setLocalStorage(response.token)
            /* entrar com o timer e o toast */
            window.location.replace('./src/pages/logged.html')
        }
    })
}

loginModal()