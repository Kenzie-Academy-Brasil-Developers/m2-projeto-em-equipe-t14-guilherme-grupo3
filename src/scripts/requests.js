const urlBase = 'https://m2-api-adot-pet.herokuapp.com'

/* {
    USUÁRIO DE TESTE:

    "name": "grupo3",
    "email": "grupo3@mail.com",
    "password": "123",
    "avatar_url": "https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile-thumbnail.png"
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5MjIwNzcsImV4cCI6MTY2ODUyNjg3Nywic3ViIjoiN2EyNDRjNmQtZGQyOS00YzI2LThkOGYtZGEzZGI1NDUzY2U4In0.XBdE5HR2bicnsKPDl-4DqaCAyCpNLvdHjs_lqxnhy0E"
} */

const sendRequest = (options) => {
    const request = axios.request(options).then(response => {
        // console.log(response.data);
        return response.data
    }).catch(function (error) {
        console.error(error);
    });
    return request
}

/* ---------------------------------------------------- */
/* ----------------- REQUESTS USUÁRIOS ---------------- */
/* ---------------------------------------------------- */


/* ------------------ EFETUAR LOGIN -------------------*/
export const login = (body) => {
    const options = {
        method: 'POST',
        url: `${urlBase}/session/login`,
        headers: { 'Content-Type': 'application/json' },
        data: body
        // { email: 'rafael32@mail.com', password: '123456' }
    };

    return sendRequest(options)
}


/* ------------------ CRIAR USUÁRIO -------------------*/
export const createUser = (body) => {
    const options = {
        method: 'POST',
        url: `${urlBase}/users`,
        headers: { 'Content-Type': 'application/json' },
        data: body
        /* {
            name: 'Rafael',
            email: 'rafael3030@mail.com',
            password: '123456',
            avatar_url: 'https://imagemLegal.com'
        } */
    };

    return sendRequest(options)
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
export const updateProfile = (token, body) => {
    const options = {
        method: 'PATCH',
        url: 'https://m2-api-adot-pet.herokuapp.com/users/profile',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: body
        /* { avatar_url: 'https://umaImagemLegal.com', name: 'Bertoldo' } */
    };

    return sendRequest(options)
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
export const createPet = (token, body) => {
    const options = {
        method: 'POST',
        url: `${urlBase}/pets`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: body
        /* {
           name: 'Sebastian',
           bread: 'SRD',
           species: 'Cachorro',
           avatar_url: 'uma fotinha do bastião'
       } */
    };

    return sendRequest(options)
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
export const updatePet = (token, id, body) => {
    const options = {
        method: 'PATCH',
        url: `${urlBase}/pets/${id}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: body
        /*  {
            name: 'Sebastian',
            bread: 'SRD',
            species: 'Cachorro',
            avatar_url: 'uma fotinha do Sebastian'
        } */
    };

    return sendRequest(options)
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
        // { pet_id: 'e44b2590-05a5-4f21-aa50-38ab32bcc058' }
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
        /* {
            adopter_id: '60d492f8-c5cd-44d7-98a5-a968624b9f55',
            pet_id: '712fa317-d974-472b-b561-6ef4cdcbd1fd'
        } */
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