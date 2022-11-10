export function getLocalStorage () {
    const token = localStorage.getItem ('@kenziepets-ID')
    return token
}

export function setLocalStorage(token) {
    localStorage.setItem('@kenziepets-ID', token)
}

export function removeStorage() {
    localStorage.removeItem('@kenziepets-ID')
}