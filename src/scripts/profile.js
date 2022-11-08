import { getUserProfile } from "./requests.js"

const dinamicPage = async () => {
    const user = await getUserProfile("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5MjIwNzcsImV4cCI6MTY2ODUyNjg3Nywic3ViIjoiN2EyNDRjNmQtZGQyOS00YzI2LThkOGYtZGEzZGI1NDUzY2U4In0.XBdE5HR2bicnsKPDl-4DqaCAyCpNLvdHjs_lqxnhy0E")
    const main = document.querySelector("main")

    main.insertAdjacentHTML("afterbegin", ` <section class="display-flex background-purple justify-center">
    <img class="profile-image" src="${user.avatar_url}">
</section>
<section class="width-100 display-flex flex-direction-column align-items-center">
    <div class="profile-information display-flex flex-direction-column justify-between">
        <h2 class="font-brand text-align-center">Dados pessoais</h2>
        <p><span class="font-body-brand">Nome:</span> <span class="font-body-black">${user.name}</span></p>
        <p><span class="font-body-brand">E-mail:</span> <span class="font-body-black">${user.email}</span></p>
        <div class="display-flex justify-evenly">
            <button class="btn btn-primary att-profile" type="button">Atualizar informações</button>
            <button class="btn btn-line-red delete-profile" type="button">Deletar conta</button>
        </div>
    </div>
</section>
<section class="pets-section display-flex flex-direction-column">
    <div>
        <button class="register-pet btn btn-green" type="button">Cadastrar novo pet</button>
    </div>
`)
}

dinamicPage()