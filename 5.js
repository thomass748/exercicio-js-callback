const executarTarefa = (acao) => acao()

executarTarefa(function () {
    console.log('Tarefa concluída!')
})