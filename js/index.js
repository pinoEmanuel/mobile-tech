const contenedor = document.querySelector('div.contenedor#contenedor')
const inputFiltro = document.querySelector('#filtrarCelulares')
const btnFiltro = document.querySelector('button#btnFiltrarCelulares')

const LINK = "js/celulares.json"
const celulares = []

function cardsHTML(celular){
    return `<div class="div-card"> 
                <div class="imagen"><img src=${celular.imagen}></img></div>
                <div class="nombre"><p>${celular.nombre}</p></div>
                <div class="monto"><p>${celular.monto}</p></div>
                <div class="comprar"><button id="${celular.id}" class="button button-outline">Agregar al Carrito</button></div>
            </div>`
}

function cardError() {
    return `<h2>No se encontraron productos para mostrar.. 😮</h2>`
}

function notificacionAgregarCarrito(celular){
    Toastify({
        text: `${celular} se agregó al carrito`,
        duration: 5000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
        background: "linear-gradient(to right, #FF7F50, #FFD700)",
        }
    }).showToast();
}

function activarBotonAgregarCarrito(){
    const botones = document.querySelectorAll("button.button.button-outline")
        for(let boton of botones) {
            boton.addEventListener("click", (a)=> {
                const celularElegido = celulares.find((celular)=> celular.id === parseInt(a.target.id))       
                checkout.push(celularElegido)
                notificacionAgregarCarrito(celularElegido.nombre)
                localStorage.setItem("carritoCompra", JSON.stringify(checkout))
            })
        }
}

function cargarCelulares(celularesMostrar){
    contenedor.innerHTML = ''
    celularesMostrar.forEach((celular)=> {
        contenedor.innerHTML += cardsHTML(celular)
    })
    activarBotonAgregarCarrito()
}

function obtenerCelulares() {
    fetch(LINK)
        .then((respuesta)=> respuesta.json())
        .then((datos)=> celulares.push(...datos))
        .then(()=> cargarCelulares(celulares))
        .catch((error)=> contenedor.innerHTML = cardError())
}

function filtrarCelulares(){
    if(inputFiltro.value > 0){
        let celularesFiltrados = celulares.filter(celular => celular.monto >= inputFiltro.value)
        if(celularesFiltrados.length > 0){
            cargarCelulares(celularesFiltrados)
        } else{
            contenedor.innerHTML= cardError()
        }
    }
    else{
        cargarCelulares(celulares)
    }
}


btnFiltro.addEventListener("click", ()=> {filtrarCelulares()})
obtenerCelulares()
