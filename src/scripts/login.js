import { setLocalStorage } from "./localStorage.js";
import { createModalLogin } from "./modals.js";
import { login } from "./requests.js";

async function loginModal() {
    const loginBtn = document.querySelector('.btn-primary')

    loginBtn.addEventListener('click', (event) => {
        event.preventDefault()
        createModalLogin()

        const form = document.querySelector('form')
        const [...formElements] = form

        form.addEventListener('submit', async (iten) => {
            iten.preventDefault()

            const body = {}

            formElements.forEach(element => {

                if (element.tagName === "INPUT" && element.value !== "") {
                    body[element.id] = element.value
                }
            })

            const response = await login(body)

            if (response == 'Email not found' || response == 'please inform a valid email format') {
                console.log('Email não encontrado!')
            } else if (response == 'Please verify the informed password and try again') {
                console.log('Senha inválida!')
            } else {
                setLocalStorage(response.token)
                /* entrar com o timer e o TOAST */
                window.location.replace('./src/pages/logged.html')
            }
        })
    })
}

loginModal()