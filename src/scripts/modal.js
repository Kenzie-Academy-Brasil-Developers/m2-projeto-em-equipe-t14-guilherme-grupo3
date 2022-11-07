export const createModalContainer = () =>{
    const body = document.querySelector('body')

    const divContainer = document.createElement('div')
    const divModal = document.createElement('div')
    const divHeader = document.createElement('div')
    const button = document.createElement('button')
    const img = document.createElement('img')
    const divContent = document.createElement('div')
    const divFooter = document.createElement('div')

    divContainer.className = 'modal-container'
    divModal.className = 'modal'
    divHeader.className = 'header-modal'
    button.id = 'close-modal'
    img.src = '../images/close.svg'
    divContent.className = 'content-modal'
    divFooter.classList = 'footer-modal'

    divContainer.appendChild(divModal)
    divModal.append(divHeader, divContent, divFooter)
    divHeader.appendChild(button)
    button.appendChild(img)

    body.appendChild(divContainer)
    return divContent
}

