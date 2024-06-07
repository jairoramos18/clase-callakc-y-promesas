function sumar(acumulado, valor) {
    let suma
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            suma = acumulado + valor
            resolve(suma)
        }, 300);
    })


}
console.log('al inicio del programa')
let acumulado = 0
sumar(acumulado, 4).then(function (suma) {
    console.log(suma)
})

// acumulado = sumar(acumulado,4)
// acumulado = sumar(acumulado,4)
// console.log(acumulado)
console.log('al final del programa')
