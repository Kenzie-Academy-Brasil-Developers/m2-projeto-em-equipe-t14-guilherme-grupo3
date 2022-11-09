import { createModalRegister, createModalLogin} from "./modals.js";
import { createUser } from "./requests.js";
import { toast } from "./toasts.js";

export const registerUser = () => {
    const button = document.querySelector(".button-register")

    button.addEventListener("click", function() {
        createModalRegister()

        const form = document.querySelector("form")
        const elements = [...form.elements]
    
        form.addEventListener("submit", async (e) => {
            const container = document.querySelector('.modal-container')
            e.preventDefault()
            const body = {}
    
            elements.forEach((element) => {
                if(element.tagName == "INPUT" && element.value !== "") {
                    body[element.id] = element.value
                }
            })
            await createUser(body)

            toast("success", "Redirecionando para o login")
            setTimeout(() => {
                container.remove()
                createModalLogin()
            }, 4000);

        })

    })   
}

