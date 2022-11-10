export const toast = (title, message) => {
    const main = document.querySelector("main")

    const container = document.createElement("div")
    const div = document.createElement("div")
    const p = document.createElement("p")

    if (title == "success") {
        container.classList.add("toast-success")
    } else if(title == "fail") {
        container.classList.add("toast-fail")
    }

    p.innerText = `${message}`

    div.appendChild(p)
    container.appendChild(div)
    main.appendChild(container)
}