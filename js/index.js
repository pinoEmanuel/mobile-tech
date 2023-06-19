//funcionalidad boton quitar carrito celularCarrito.id

const checkout = []
const contenedor = document.querySelector('div.contenedor#contenedor')

const celulares =  [{id: 1, imagen: "/resources/14promax.jpg", nombre: "Apple iPhone 14 Pro Max", monto: 700000, stock: 200},
                    {id: 2, imagen: "/resources/12pro.jpeg", nombre: "Apple iPhone 12 Pro", monto: 450000, stock: 200},
                    {id: 3, imagen: "/resources/12.jpeg", nombre: "Apple iPhone 12", monto: 400000, stock: 200},
                    {id: 4, imagen: "/resources/14plus.jpg", nombre: "Apple iPhone 14 Plus", monto: 650000, stock: 200},
                    {id: 5, imagen: "/resources/edge+.jpg", nombre: "Motorola Edge+ (2023)", monto: 300000, stock: 200},
                    {id: 6, imagen: "/resources/motogpower.jpg", nombre: "Motorola Moto G Power 5G", monto: 200000, stock: 200},
                    {id: 7, imagen: "/resources/edge40pro.jpg", nombre: "Motorola Edge 40 Pro", monto: 340000, stock: 200},
                    {id: 8, imagen: "/resources/g13.jpg", nombre: "Motorola Moto G13", monto: 100000, stock: 200},
                    {id: 9, imagen: "/resources/s20ultra.jpeg", nombre: "Samsung Galaxy S20 Ultra", monto: 185000, stock: 200},
                    {id: 10, imagen: "/resources/s21ultra.jpeg", nombre: "Samsung Galaxy S21 Ultra", monto: 220000, stock: 200},
                    {id: 11, imagen: "/resources/s23ultra.jpg", nombre: "Samsung Galaxy S23 Ultra", monto: 450000, stock: 200},
                    {id: 12, imagen: "/resources/s22.jpg", nombre: "Samsung Galaxy S22", monto: 280000, stock: 200},
                    {id: 13, imagen: "/resources/tcl305.jpg", nombre: "TCL 305", monto: 45000, stock: 200},
                    {id: 14, imagen: "/resources/tcl30e.jpg", nombre: "TCL 30E", monto: 70000, stock: 200},
                    {id: 15, imagen: "/resources/tclstylus.jpg", nombre: "TCL Stylus 5G", monto: 150000, stock: 200},
                    {id: 16, imagen: "/resources/tcl40r.jpg", nombre: "TCL 40R", monto: 80000, stock: 200},
                    {id: 17, imagen: "/resources/redmik60.jpg", nombre: "Xiaomi Redmi K60", monto: 170000, stock: 200},
                    {id: 18, imagen: "/resources/13ultra.jpg", nombre: "Xiaomi 13 Ultra", monto: 500000, stock: 200},
                    {id: 19, imagen: "/resources/xiaomi13pro.jpg", nombre: "Xiaomi 13 Pro", monto: 300000, stock: 200},
                    {id: 20, imagen: "/resources/12tpro.jpg", nombre: "Xiaomi 12T Pro", monto: 250000, stock: 200}]

function cardsHTML(celular){
    return `<div class="div-card"> 
                <div class="imagen"><img src=${celular.imagen}></img></div>
                <div class="nombre"><p>${celular.nombre}</p></div>
                <div class="monto"><p>${celular.monto}</p></div>
                <div class="comprar"><button id="${celular.id}" class="button button-outline">Agregar al Carrito</button></div>
            </div>`
}

function cargarCelulares(){
    contenedor.innerHTML = ''
    celulares.forEach((celular)=> {
        contenedor.innerHTML += cardsHTML(celular)
    })
    activarBotonAgregarCarrito()
}

function activarBotonAgregarCarrito(){
    const botones = document.querySelectorAll("button.button.button-outline")
        for(let boton of botones) {
            boton.addEventListener("click", (a)=> {
                const celularElegido = celulares.find((celular)=> celular.id === parseInt(a.target.id))
                checkout.push(celularElegido)
                localStorage.setItem("carritoCompra", JSON.stringify(checkout))
                alert("Producto agregado al carrito correctamente.")
            })
        }
}

cargarCelulares()