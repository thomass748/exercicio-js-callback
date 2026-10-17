const somar = (a, b) => {
    return a + b;
};

const multiplicar = (a, b) => {
    return a * b;
};

const calcular = (a, b, operacao) => console.log(operacao(a, b));

calcular(5, 2, multiplicar);