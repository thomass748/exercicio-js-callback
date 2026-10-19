const mensagemPedidoPronto = () => console.log(`Pedido Pronto`)

const prepararPedido = (callback) => {
    console.log(`Preparando pedido...`)
    setTimeout(callback, 2000)
};

prepararPedido(mensagemPedidoPronto)