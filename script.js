//Variables

let banderaSalir = false
let acumuladorPrecio = 0
let contadorProducto = 0
let cuotas = 0
let interes = 0
let precioTotal = 0
let interesAPagar = 0
let precioCuota = 0

//Funciones

function menuPrincipal(opcion){
    opcion = Number(prompt("Que tipo de producto estas buscando?\n1-Consolas\n2-Juegos\n3-Accesorios\n4-Ver carrito\n5-Salir"))
    return opcion
}

function menuConsolas(producto){
    producto = Number(prompt("Que quieres agregar al carrito de compras?\n1-Family Game $50000\n2-Sega Genesis $70000\n3-Super Nintendo $150000\n4-Playstation 5 $550000\n5-Volver"))
    return producto
}

function menuJuegos(producto){
    producto = Number(prompt("Que quieres agregar al carrito de compras?\n1-Mario Bros 3 $1000\n2-Super Mario RPG $4000\n3-Uncharted 3 $18000\n4-God Of War 4 $10000\n5-Volver"))
    return producto
}

function menuAccesorios(producto){
    producto = Number(prompt("Que quieres agregar al carrito de compras?\n1-Mando ps5 $5000\n2-Multitab Super Nintendo $2000\n3-VR Ps4 $150000\n4-Mando Family Game $5300\n5-Volver"))
    return producto
}

function opcionCompra(opcion){
    opcion = Number(prompt("Que desea hacer?\n1-Pagar\n2-Seguir comprando\n3-Vaciar carrito"))
    return opcion
}

function opcionPagos(pagos){
    pagos = Number(prompt("Como desea abonar?\n1-1 pago 0% interes\n2-3 pagos 7% intereses\n3-6 pagos 15% intereses\n4-12 pagos 25% intereses\n5-Volver"))
    return pagos
}

function operacionIntereses(acumuladorPrecio, interes){
    let intereses = (acumuladorPrecio * interes) / 100
    return intereses
}

function operacionPrecioTotal(acumuladorPrecio, interes){
    let precioFinal = ((acumuladorPrecio * interes) / 100) + acumuladorPrecio
    return precioFinal
}

function operacionPrecioCuota(precioTotal, cuotas){
    let cuota = precioTotal / cuotas
    return cuota
}

// ejecucion

alert("Bienvenido a tienda gamer,en nuestra tienda podras comprar todo tipo de juegos,consolas y accesorios del rubro gamer.")

do{
    switch(menuPrincipal()){
        case 1:
            switch(menuConsolas()){
                case 1:
                    alert("Agregaste un Family Game al carrito")
                    contadorProducto++
                    acumuladorPrecio+=50000
                    break;
                case 2:
                    alert("Agregaste un Sega Genesis al carrito")
                    contadorProducto++
                    acumuladorPrecio+=70000
                    break;
                case 3:
                    alert("Agregaste un Super Nintendo al carrito")
                    contadorProducto++
                    acumuladorPrecio+=150000
                    break;
                case 4:
                    alert("Agregaste un Playstation 5 al carrito")
                    contadorProducto++
                    acumuladorPrecio+=550000
                    break;
                case 5:
                break;
                default:
                    alert("Opcion incorrecta")
                    break;
            }
        break;
        case 2:
            switch(menuJuegos()){
                case 1:
                    alert("Agregaste Mario Bros 3 al carrito")
                    contadorProducto++
                    acumuladorPrecio+=1000
                break;
                case 2:
                    alert("Agregaste Super Mario RPG al carrito")
                    contadorProducto++
                    acumuladorPrecio+=4000
                break;
                case 3:
                    alert("Agregaste Uncharted 3 al carrito")
                    contadorProducto++
                    acumuladorPrecio+=18000
                break;
                case 4:
                    alert("Agregaste God of war al carrito")
                    contadorProducto++
                    acumuladorPrecio+=10000
                break;
                case 5:
                break;  
                default:
                    alert("Opcion incorrecta")
                break;
            }
        break;
        case 3:
            switch(menuAccesorios()){
                case 1:
                    alert("Agregaste Mando ps5 al carrito")
                    contadorProducto++
                    acumuladorPrecio+=5000
                break;
                case 2:
                    alert("Agregaste Multitab super nintendo al carrito")
                    contadorProducto++
                    acumuladorPrecio+=2000
                break;
                case 3:
                    alert("Agregaste VR Ps4 al carrito")
                    contadorProducto++
                    acumuladorPrecio+=150000
                break;
                case 4:
                    alert("Agregaste Mando famly game al carrito")
                    contadorProducto++
                    acumuladorPrecio+=5300
                break;
                case 5:
                break;
                default:
                    alert("Opcion incorrecta")
                break;
            }
        break;
        case 4:
            if(contadorProducto == 0){
                alert("No tienes productos agregados al carrito")
            }else{
                alert("Tienes " + contadorProducto + " Productos agregados al carrito\nCosto total de: $" + acumuladorPrecio)
                switch(opcionCompra()){
                    case 1:
                    switch(opcionPagos()){
                        case 1:
                            alert("Costo total de: $" + acumuladorPrecio)
                            alert("Compra procesada exitosamente")
                            contadorProducto = 0
                            acumuladorPrecio = 0
                        break;
                        case 2:
                            cuotas = 3
                            interes = 7
                            interesAPagar = operacionIntereses(acumuladorPrecio, interes)
                            precioTotal = operacionPrecioTotal(acumuladorPrecio, interes)
                            precioCuota = operacionPrecioCuota(precioTotal, cuotas)
                            alert("Debes pagar un interes de: $" + interesAPagar + " El precio final es de: $" + precioTotal + " a pagar en " + cuotas + " cuotas de: $" + precioCuota.toFixed(2))
                            alert("Compra procesada exitosamente")
                            contadorProducto = 0
                            acumuladorPrecio = 0
                        break;
                        case 3:
                            cuotas = 6
                            interes = 15
                            interesAPagar = operacionIntereses(acumuladorPrecio, interes)
                            precioTotal = operacionPrecioTotal(acumuladorPrecio, interes)
                            precioCuota = operacionPrecioCuota(precioTotal, cuotas)
                            alert("Debes pagar un interes de: $" + interesAPagar + " El precio final es de: $" + precioTotal + " a pagar en " + cuotas + " cuotas de: $" + precioCuota.toFixed(2))
                            alert("Compra procesada exitosamente")
                            contadorProducto = 0
                            acumuladorPrecio = 0
                        break;
                        case 4:
                            cuotas = 12
                            interes = 25
                            interesAPagar = operacionIntereses(acumuladorPrecio, interes)
                            precioTotal = operacionPrecioTotal(acumuladorPrecio, interes)
                            precioCuota = operacionPrecioCuota(precioTotal, cuotas)
                            alert("Debes pagar un interes de: $" + interesAPagar + " El precio final es de: $" + precioTotal + " a pagar en " + cuotas + " cuotas de: $" + precioCuota.toFixed(2))
                            alert("Compra procesada exitosamente")
                            contadorProducto = 0
                            acumuladorPrecio = 0
                        break;
                        case 5:
                        break;
                        default:
                            alert("Opcion incorrecta")
                        break;
                    }
                    break;
                    case 2:
                        alert("Regresando a la tienda")
                    break;    
                    case 3:
                        contadorProducto = 0
                        acumuladorPrecio = 0
                        alert("Se vacio el carrito")
                    break;
                    default:
                        alert("opcion incorrecta")
                    break;
                }
            }
        break;
        case 5:
            banderaSalir = true
            alert("Gracias por probar este simulador")
        break;
        default:
            alert("Opcion incorrecta")
        break;
    }
}while(banderaSalir == false)

