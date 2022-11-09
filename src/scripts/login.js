import { setLocalStorage } from "./localStorage.js";
import { createModalLogin } from "./modals.js";
import { login } from "./requests.js";
import { toast } from "./toasts.js";

export const eventLogin = () =>{
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

            login(body)
        })
}
async function loginModal() {
    const loginBtn = document.querySelector('.btn-primary')

    loginBtn.addEventListener('click', (event) => {
        event.preventDefault()
        createModalLogin()
        eventLogin()
        
    })
}

loginModal()
