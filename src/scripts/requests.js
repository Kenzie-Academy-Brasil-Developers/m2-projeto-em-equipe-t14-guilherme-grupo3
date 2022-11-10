import { setLocalStorage } from "./localStorage.js";
import { eventLogin } from "./login.js";
import { createModalLogin } from "./modals.js";
import { toast } from "./toasts.js";

const urlBase = 'https://m2-api-adot-pet.herokuapp.com'

const sendRequest = (options) => {
    const request = axios.request(options).then(response => {
        return response.data
    }).catch(function (error) {
        // console.error(error);
        return error.response.data.message
    });
    return request
}

/* ---------------------------------------------------- */
/* ----------------- REQUESTS USUÁRIOS ---------------- */
/* ---------------------------------------------------- */


/* ------------------ EFETUAR LOGIN -------------------*/
export const login = async (body) => {
    const options = {
        method: 'POST',
        url: `${urlBase}/session/login`,
        headers: { 'Content-Type': 'application/json' },
        data: body
    };

    const response = await sendRequest(options)

    if (response == 'Email not found' || response == 'please inform a valid email format') {
        toast("fail", "Email não encontrado!")
    } else if (response == 'Please verify the informed password and try again') {
        toast("fail", "Senha inválida!")
    } else {
        setLocalStorage(response.token)
        toast("success", "Logado com sucesso!")
        setTimeout(() => {
            window.location.replace('./src/pages/logged.html')
        }, 3000);
    }
}


/* ------------------ CRIAR USUÁRIO -------------------*/
export const createUser = async (body) => {
    const options = {
        method: 'POST',
        url: `${urlBase}/users`,
        headers: { 'Content-Type': 'application/json' },
        data: body
    };

    const response = await sendRequest(options)

    if (response == 'please inform a valid email format') {
        toast("fail", "Email inválido!")
    } else if (response == 'Email already in use') {
        toast("fail", "Email já está em uso!")
    } else if (response == 'please inform a valid image link') {
        toast("fail", "Link do Avatar inválido!")
    } else {
        setLocalStorage(response.token)
        toast("success", "Cadastrado com sucesso!")
        setTimeout(() => {
            const container = document.querySelector('.modal-container')
            container.remove()
            createModalLogin()
            eventLogin()
        }, 3000);
    }
}


/* ------------------ LISTAR USUÁRIOS CADASTRADOS -------------------*/
export const getAllUsers = (token) => {
    const options = {
        method: 'GET',
        url: `${urlBase}/users`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return sendRequest(options)
}


/* ------------------ VER PERFIL USUÁRIO LOGADO -------------------*/
export const getUserProfile = (token) => {
    const options = {
        method: 'GET',
        url: `${urlBase}/users/profile`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return sendRequest(options)
}


/* ------------------  ATUALIZAR PERFIL USUÁRIO LOGADO -------------------*/
export const updateProfile = async (token, body) => {
    const options = {
        method: 'PATCH',
        url: 'https://m2-api-adot-pet.herokuapp.com/users/profile',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: body
    };

    const response = await sendRequest(options)

    if (response == 'please inform a valid image link') {
        setTimeout(() => {
            toast("fail", "Link do Avatar inválido!")
        }, 1000);
    } else {
        setTimeout(() => {
            toast("success", "Atualizado com sucesso!")

        }, 1000);
    }
}


/* ------------------  DELETAR PERFIL  -------------------*/
export const deleteProfile = (token) => {
    const options = {
        method: 'DELETE',
        url: `${urlBase}/users/profile`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return sendRequest(options)
}


/* ---------------------------------------------------- */
/* ------------------ REQUESTS PETS ------------------- */
/* ---------------------------------------------------- */


/* --------------------- CRIAR PET --------------------- */
export const createPet = async (token, body) => {
    const options = {
        method: 'POST',
        url: `${urlBase}/pets`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: body
    };

    const response = await sendRequest(options)

    if (response == "'species' field is required") {
        toast("fail", "Selecione uma espécie!")
    } else if (response == 'please inform a valid image link') {
        toast("fail", "Link da Imagem inválido!")
    } else {
        toast("success", "Cadastrado com sucesso!")
        const modal = document.querySelector(".modal-container")
        modal.remove()
        return true
    }
}


/* --------------------- LISTAR TODOS OS PETS --------------------- */
export const getAllPets = () => {
    const options = {
        method: 'GET',
        url: `${urlBase}/pets`
    };

    return sendRequest(options)
}


/* --------------------- LISTAR PETS USUÁRIO LOGADO --------------------- */
export const getPetsUser = (token) => {
    const options = {
        method: 'GET',
        url: `${urlBase}/pets/my_pets`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return sendRequest(options)
}


/* --------------------- ATUALIZAR PET PELO ID --------------------- */
export const updatePet = async (token, id, body) => {
    const options = {
        method: 'PATCH',
        url: `${urlBase}/pets/${id}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: body
    };

    const response = await sendRequest(options)

    if (response == "'species' field is required") {
        toast("fail", "Selecione uma espécie!")
    } else if (response == 'please inform a valid image link') {
        toast("fail", "Link da Imagem inválido!")
    } else {
        toast("success", "Atualizado com sucesso!")
        const modal = document.querySelector(".modal-container")
        modal.remove()
        return true
    }
}


/* --------------------- DELETAR PET PELO ID --------------------- */
export const deletePet = (token, id) => {
    const options = {
        method: 'DELETE',
        url: `${urlBase}/pets/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return sendRequest(options)
}


/* ---------------------------------------------------- */
/* ------------------ REQUESTS ADOÇÃO ----------------- */
/* ---------------------------------------------------- */


/* -------------------- CRIAR ADOÇÃO ------------------ */
export const createAdoption = (token, body) => {
    const options = {
        method: 'POST',
        url: `${urlBase}/adoptions`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: body
    };

    return sendRequest(options)
}


/* ---------------- LISTAR TODAS AS ADOÇÕES --------------- */
export const getAllAdoptions = (token) => {
    const options = {
        method: 'GET',
        url: `${urlBase}/adoptions`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return sendRequest(options)
}


/* ---------------- LISTAR ADOÇÃO POR ID --------------- */
export const getAdoptionById = (token, id) => {
    const options = {
        method: 'GET',
        url: `${urlBase}/adoptions/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return sendRequest(options)
}


/* ---------------- LISTAR ADOÇÕES USUÁRIO LOGADO --------------- */
export const getMyAdoptions = (token) => {
    const options = {
        method: 'GET',
        url: `${urlBase}/adoptions/myAdoptions`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return sendRequest(options)
}


/* ---------------- ATUALIZAR ADOÇÃO POR ID --------------- */
export const updateAdoption = (token, id, body) => {
    const options = {
        method: 'PATCH',
        url: `${urlBase}/adoptions/update/${id}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: body
    };

    return sendRequest(options)
}


/* ---------------- DELETAR ADOÇÃO POR ID --------------- */
export const deleteAdoption = (token, id) => {
    const options = {
        method: 'DELETE',
        url: `${urlBase}/adoptions/delete/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return sendRequest(options)
}