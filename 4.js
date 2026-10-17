const verificacao = (nota) => {
    if (nota < 6) {console.log('Recuperação')}
    else {console.log('Aprovado')}
}

const verificarNota = (nota, callback) => callback(nota);

verificarNota(7, verificacao);