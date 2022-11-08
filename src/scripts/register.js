import { createModalRegister} from "./modals.js";
import { createUser } from "./requests.js";

const redirectLogin = () => {
    const modal = document.querySelector(".modal-container")
    const button = document.querySelector(".redirect-login")
    button.addEventListener("click", function() {
        modal.remove()
        // createModalLogin()
    })
}

export const registerUser = () => {
    const button = document.querySelector(".button-register")
    button.addEventListener("click", function() {
        createModalRegister()
        redirectLogin()

        const form = document.querySelector("form")
        const elements = [...form.elements]
    
        form.addEventListener("submit", async (e) => {
            e.preventDefault()
            const body = {}
    
            elements.forEach((element) => {
                if(element.tagName == "INPUT" && element.value !== "") {
                    body[element.id] = element.value
                }
            })
            await createUser(body)

        })

    })   
}

