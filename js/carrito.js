const tbody = document.querySelector("tbody")
const btnComprar = document.querySelector("button#botonComprar")
const divTotal = document.querySelector("div.total#total")
const items = document.querySelector("h1#items")
const checkout = recuperarCarritoLS()
let subTotal = 0

function recuperarCarritoLS() {
    if(localStorage.getItem("carritoCompra")){
        return JSON.parse(localStorage.getItem("carritoCompra"))
    }
    else{
        return []
    }
}

function calcularSubTotal () {
    if (subTotal === 0){
        for (let i in checkout){
            subTotal += checkout[i].monto
        }
    }
}

function cargarCarrito(celularCarrito){
    return `<tr class=carrito>    
                <td class="imagen"><img id=carritoImg src="${celularCarrito.imagen}"></img></td>
                <td class="nombre">${celularCarrito.nombre}</td>
                <td class="monto">${celularCarrito.monto}</td>
            </tr>`
}

function cargarTotal(){
    calcularSubTotal()
    return `<h1 id="saludo">Gracias por su compra!</h1>
            <h2 id="total">El total es de: $ ${subTotal}</h2>`
}

function activarBotonComprar() {
    divTotal.innerHTML = ""
    btnComprar.addEventListener("click", () => {
        divTotal.innerHTML = cargarTotal()   
    })
}

function cargarCantidadItems() {
    items.textContent = "Carrito: " + checkout.length + " items."
}

if(checkout.length > 0){
    tbody.innerHTML = ""
    checkout.forEach(celularCarrito => {
        tbody.innerHTML += cargarCarrito(celularCarrito)
    })
}

cargarCantidadItems()
activarBotonComprar()

