function calculo () {
    const input1 = document.getElementById("input1");
    let nota1 = parseFloat(input1.value)
    const input2 = document.getElementById("input2");
    let nota2 = parseFloat(input2.value)
    const input3 = document.getElementById("input3");
    let nota3 = parseFloat(input3.value)
    const resultadoDiv = document.getElementById("Resultadomedia");
    resultadoDiv.innerHTML = ""


    resultado_soma = nota1 + nota2 + nota3
    resultado_media = resultado_soma / 3

    if (resultado_media > 7){
        resultadoDiv.innerHTML += `<strong>Aluno aprovado, média ${resultado_media}</strong>`
    }
    else{
        resultadoDiv.innerHTML += `<strong>Aluno reprovado, média ${resultado_media}</strong>`
    }
}

const gerarresultado = document.getElementById("Resultado")
gerarresultado.addEventListener("click",calculo)