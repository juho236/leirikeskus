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
    let id = Math.min(Number(document.URL.charAt(document.URL.length-1)),4)
    if (!id) {
        id = 0
    }
    let selected = id
    const options = ["Pieni Mökki","Suuri Mökki","Teltta","Asuntoautopaikka","Hotellihuone"]
    const dropdownframe = document.createElement("div")
    dropdownframe.classList = "dropdown"
    const input = document.createElement("input")
    input.type = "button"
    input.onclick = () => {
        if (dropdownframe.style.display != "none") {
            dropdownframe.style.display = "none"
            select(selected)
        } else {
            dropdownframe.style.display = ""
            input.value = "Valitse joku näistä"
        }
    }
    const frames = []

    for (let i=0;i<options.length;i++) {
        const fr = document.createElement("input")

        fr.type = "button"
        fr.value = options[i]
        fr.onclick = () => {
            select(i)
        }

        dropdownframe.appendChild(fr)
        frames[i] = fr
    }

    const select = (id) => {
        selected = id
        dropdownframe.style.display = "none"
        input.value = options[id]
    }
    select(id)
    const fr = document.getElementById("frame")
    fr.appendChild(input)
    fr.appendChild(dropdownframe)
}