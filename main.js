const popup = (id,msg) => {
    const target = document.getElementById(id)
    let el = document.getElementById(id+"popup")
    if (el) {
        el.remove()
    } else {
        el = document.createElement("div")
        el.classList = "popup"
        el.id = id+"popup"
        el.innerHTML = msg
        el.style.top = (target.offsetTop+target.parentElement.offsetTop)+"px"
        el.style.left = (target.offsetLeft+target.parentElement.offsetLeft)+"px"
        document.body.appendChild(el)
    }
} 

const runForm = () => {
    const id = document.URL.charAt(document.URL.length-1)
    const options = ["Pieni Mökki","Suuri Mökki","Teltta","Asuntoautopaikka"]
}