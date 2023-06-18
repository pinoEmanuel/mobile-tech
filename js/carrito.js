const checkout = recuperarCarritoLS()
const tbody = document.querySelector("tbody")

function recuperarCarritoLS() {
    if(localStorage.getItem("carritoCompra")){
        return JSON.parse(localStorage.getItem("carritoCompra"))
    }
    else{
        return []
    }
}

function cargarCarrito(celularCarrito){
    return `<tr>
                <td>${celularCarrito.id}</td>
                <td><img>${celularCarrito.imagen}</img></td>
                <td>${celularCarrito.nombre}</td>
                <td>${celularCarrito.monto}</td>
                <td><img src="resources/checkout.png" width= "30px"></td>
            </tr>`
}

function activarBotonComprar() {
    const btnComprar = document.querySelector("div.button")
    btnComprar.addEventListener("click", () => {
            generarCuotas()

    } )
}

function generarCuotas() {
    return `<tr>
                <td><p>Ingrese la cantidad de cuotas en la que desea pagar: </p></td>
                <input type="number" id="inputNombre" min=1 max=48>
                <button class="button" id="btnConfirmar">Confirmar</button>
            </tr>`
}

if(checkout.length > 0){
    checkout.forEach(celularCarrito => {
        tbody.innerHTML += cargarCarrito(celularCarrito)
    })
}

activarBotonComprar()