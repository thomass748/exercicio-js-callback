const triplo = (n) => {
    return n*3
}

const processarNumero = (numero, callback) => console.log(callback(numero));

processarNumero(7, triplo);