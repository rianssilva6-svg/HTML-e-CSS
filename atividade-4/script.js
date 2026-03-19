function idade() {

    const input1 = document.getElementById("input1");
    let ano = parseInt(input1.value);

    const resultadoDiv = document.getElementById("Verificacao");
    resultadoDiv.innerHTML = "";

    if (isNaN(ano)) {
        resultadoDiv.innerHTML = "⚠️ Digite uma idade válida!";
        return;
    }

    if (ano < 16) {
        resultadoDiv.innerHTML = "<strong>Não pode votar</strong>";
    } 
    else if (ano >= 16 && ano <= 17) {
        resultadoDiv.innerHTML = "<strong>Voto opcional</strong>";
    } 
    else if (ano >= 18 && ano <= 65) {
        resultadoDiv.innerHTML = "<strong>Voto obrigatório</strong>";
    } 
    else {
        resultadoDiv.innerHTML = "<strong>Voto opcional (acima de 65 anos)</strong>";
    }
}

const verificaridade = document.getElementById("Verificar");
verificaridade.addEventListener("click", idade);