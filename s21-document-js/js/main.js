
let killers = ["jason","freddy","chucky","predator"]

let body = document.querySelector("body")
let uList = document.createElement("ul")
let script = document.querySelector("script")
body.insertBefore(uList,script).textContent="Lista de asesinos"
let uListSelector = document.querySelector("ul")

killers.forEach(element =>{
    let list = document.createElement("li")
    uListSelector.appendChild(list).textContent = element
})