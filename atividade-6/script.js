function requerimento () {
    const matriculaInput = document.getElementById("matriculaInput");
    let matricula = parseInt(matriculaInput.value)

    const nascimentoInput = document.getElementById("nascimentoInput");
    let anoNascimento = parseInt(nascimentoInput.value)

    const trabalhoInput = document.getElementById("trabalhoInput");
    let trabalho = parseInt(trabalhoInput.value)


    const resultadoDiv = document.getElementById("Verificar");
    resultadoDiv.innerHTML += "";

    if (isNaN(matricula) || isNaN(anoNascimento) || isNaN(trabalho)) {
        resultadoDiv.innerHTML += "Tente Novamente!!";
        return;
    }

    resultadoDiv.innerHTML += `Matricula: ${matricula}<br>`
    resultadoDiv.innerHTML += `Nascimento: ${anoNascimento}<br>`
    resultadoDiv.innerHTML += `Tempo de trabalho: ${trabalho}<br>`

    let idade = 2026 - anoNascimento;

    if (idade < 65 && trabalho < 30) {
        resultadoDiv.innerHTML += `<strong>Não requerer aposentadoria</strong><br>`
    }

    else {
        resultadoDiv.innerHTML += `<strong>Requerer aposentadoria</strong><br>`
    }
}

const verificarRequerimento = document.getElementById ("Requerimento")
verificarRequerimento.addEventListener ("click", requerimento)