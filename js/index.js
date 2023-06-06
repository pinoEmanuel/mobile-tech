const interesCompra = 1.33
const carrito = []

class Compra {
    constructor(carritoCompra){
        this.carrito = carritoCompra
    }
    obtenerSubTotal() {
        if (this.carrito.length > 0){
            return this.carrito.reduce((acc, celular) => acc + celular.monto, 0)
        }
    }
}

const celulares =  [{id: 1, nombre: "Apple", monto: 160000, stock: 200},
                    {id: 2, nombre: "Motorola", monto: 145000, stock: 200},
                    {id: 3, nombre: "Samsung", monto: 170000, stock: 200},
                    {id: 4, nombre: "Xiaomi", monto: 125000, stock: 200},
                    {id: 5, nombre: "TCL", monto: 126000, stock: 200}]

function buscarCelular(id){
    let resultado = celulares.find((celular)=> celular.id === parseInt(id))
    return resultado
}

function calcularYMostrarCuotaMensual(monto, meses, interes){
    console.log("--- DETALLE DE LAS CUOTAS ---")
    let calculoCuotas = (monto * interes) / meses
    for (let i = 1; i <=  meses; i++){
        console.log("Cuota ", i, "AR$ ", calculoCuotas.toFixed(2))
    }
}

function generarCarrito(){
    const shop = new Compra(carrito)
    subTotal = shop.obtenerSubTotal()
    alert("El costo total de su compra es de: $" + subTotal + ".")
}

function mostrarCarrito(){
    const arrayCarrito = carrito.map((celular) => {
        return {
            nombre: celular.nombre,
            monto: celular.monto
        }
    })
    console.log("--- CARRITO DE COMPRAS ---")
    console.table(arrayCarrito)
}

function inicio(){
    alert("Hola! \nBienvenido a nuestra tienda de celulares.")
    mostrarCelulares()
}

function mostrarCelulares(){
    console.log("Los celulares disponibles actualmente son: ")
    const arrayCelulares = celulares.map((celular)=> {
        return{
            nombre : celular.nombre,
            monto: celular.monto
        }
    })
    console.table(arrayCelulares)
    elegirCelular()   
}

function elegirCelular(){
    let eleccion = parseInt(prompt("Por favor indique la marca de celulares que desea comprar. \nElija un numero del 1 al 5 respectivamente: "))
    let celularElegido = buscarCelular(eleccion)
    if (celularElegido !== undefined){
        alert("Usted seleccionó : " + celularElegido.nombre + " su precio es: $" + celularElegido.monto)   
        let confirmacionEleccion = confirm("¿Desea confirmar su elección?")
        if (confirmacionEleccion === true){
            carrito.push(celularElegido)
            alert("¡El celular seleccionado fue agregado al carrito correctamente!")
            let otraCompra = confirm("¿Desea seguir comprando?")
            if (otraCompra === true){
                mostrarCelulares()
            }
            else{
                generarCarrito()
                elegirCuotas(subTotal)
            }
        }
        else{
            elegirCelular()
            }
    }
    else{
        alert("El codigo ingresado es incorrecto. Por favor intenta con un código válido.")
        elegirCelular()
        }
    }

function elegirCuotas(subTotal){
    let cantidadCuotas = prompt("¿En cuántas cuotas deseas pagar tu smartphone? (Cantidad mínima: 1, Cantidad máxima: 48)")
    if (isNaN(cantidadCuotas)){
        console.error("Ingrese un valor numérico, por favor.")
        elegirCuotas(subTotal)
    }
    if (cantidadCuotas > 0 && cantidadCuotas <= 48){
        alert("La elección ha sido guardada correctamente. \nA continuación se mostrarán los detalles de la compra en " + cantidadCuotas + " cuotas y su carrito respectivamente.\n¡Muchas gracias por tu compra!")
        mostrarCarrito()
        calcularYMostrarCuotaMensual(subTotal, cantidadCuotas, interesCompra)

    }
    else {
        console.warn("La cantidad de cuotas no es válida, por favor ingresa nuevamente un valor.")
        elegirCuotas(subTotal)
    }
}

inicio()