const mostrarBoasVindas = () => console.log('Bem vindo!');
const mostrarDespedida = () => console.log('Volte sempre!')

const executarMensagem = (callback1, callback2) => {
    callback1()
    callback2()
}

executarMensagem(mostrarBoasVindas, mostrarDespedida);