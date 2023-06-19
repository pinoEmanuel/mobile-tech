const checkout = recuperarCarritoLS()
const tbody = document.querySelector("tbody")
const btnComprar = document.querySelector("button#botonComprar")

function calcularYMostrarCuotaMensual(monto, meses, interes){
    console.log("--- DETALLE DE LAS CUOTAS ---")
    let calculoCuotas = (monto * interes) / meses
    for (let i = 1; i <=  meses; i++){
        console.log("Cuota ", i, "AR$ ", calculoCuotas.toFixed(2))
    }
}

function recuperarCarritoLS() {
    if(localStorage.getItem("carritoCompra")){
        return JSON.parse(localStorage.getItem("carritoCompra"))
    }
    else{
        return []
    }
}

function cargarCarrito(celularCarrito){
    return `<tr class=carrito>    
                <td class="imagen"><img src="${celularCarrito.imagen}"></img></td>
                <td class="nombre">${celularCarrito.nombre}</td>
                <td class="monto">${celularCarrito.monto}</td>
                <td class="quitar"><img src="resources/checkout.png""></td>
            </tr>`
}

function activarBotonComprar() {
    btnComprar.addEventListener("click", () => {
        alert("Compra realizada con exito!")
        
        

    })
}


if(checkout.length > 0){
    checkout.forEach(celularCarrito => {
        tbody.innerHTML += cargarCarrito(celularCarrito)
    })
}

activarBotonComprar()
//activarBotonConfirmar()










function activarBotonConfirmar() {
    btnConfirmar.addEventListener("click", () => {
        console.log("a")
        console.log(calcularYMostrarCuotaMensual(subTotal, cantCuotas.value ,interesCompra))
    })
}

function obtenerSubTotal() {
    subTotal = JSON.parse(localStorage.getItem("carritoCompra")).reduce((acc, celular) => acc + celular.monto, 0)
}
