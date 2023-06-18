const checkout = recuperarCarritoLS()
const tbody = document.querySelector("tbody")


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
    return `<tr>    
                <td><img src="${celularCarrito.imagen}"></img></td>
                <td>${celularCarrito.nombre}</td>
                <td>${celularCarrito.monto}</td>
                <td><img src="resources/checkout.png" width= "30px"></td>
            </tr>`
}

if(checkout.length > 0){
    checkout.forEach(celularCarrito => {
        tbody.innerHTML += cargarCarrito(celularCarrito)
    })
}

//activarBotonComprar()
//activarBotonConfirmar()







const btnComprar = document.querySelector("button#botonComprar")
const divCuotas = document.getElementById("cuotas")
const btnConfirmar = document.querySelector("button.button#btnConfirmar")
const cantCuotas = document.getElementById("inputCuotas")
const interesCompra = 1.33

function activarBotonComprar() {
    divCuotas.innerHTML = ""
    btnComprar.addEventListener("click", () => {
         if(divCuotas.innerHTML === ""){
            divCuotas.innerHTML += generarCuotas()
         }       
    })
}

function generarCuotas() {
    return `<td><p>Ingrese la cantidad de cuotas en la que desea pagar: </p></td>
            <input type="number" id="inputCuotas" min=1 max=48>
            <button class="button" id="btnConfirmar">Confirmar</button>`
}

function activarBotonConfirmar() {
    btnConfirmar.addEventListener("click", () => {
        console.log("a")
        console.log(calcularYMostrarCuotaMensual(subTotal, cantCuotas.value ,interesCompra))
    })
}

function obtenerSubTotal() {
    subTotal = JSON.parse(localStorage.getItem("carritoCompra")).reduce((acc, celular) => acc + celular.monto, 0)
}
