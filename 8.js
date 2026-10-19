const mensagemRepeticao = (n) => console.log(`Ação: ${n}`);

const repetirAcao = (vezes, callback) => {
    for (let i = 1; i <= vezes; i++) {
        callback(i)
    }
}

repetirAcao(5, mensagemRepeticao)