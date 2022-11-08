

function renderCardsHome(array){
    const ul = document.querySelector('#cardsHome')

    array.forEach(pet => {
        const{name, species, avatar_url, id } = pet

        const img = document.createElement('img')
        img.classList = "card-image"
        img.src = avatar_url

        const spanName = document.createElement('span')
        spanName.classList = "font-brand"
        spanName.innerText = name

        const spanSpecie = document.createElement('span')
        spanSpecie.classList = "font-brand"
        spanSpecie.innerText = species
       
        const div = document.createElement('div')
        div.classList = "card-text display-flex flex-direction-column"
        div.append(spanName, spanSpecie)

        const li = document.createElement('li')
        li.classList = "card"
        li.append(img, div)
        ul.append(li)
    });
}



export{
    renderCardsHome
}
