import { createModalDeleteProfile } from "./modals.js"

const btnDeleteProfile = document.querySelector('.delete-profile')
btnDeleteProfile.addEventListener('click', () =>{
    createModalDeleteProfile()
})