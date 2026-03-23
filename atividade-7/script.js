function resulfinal () {
    const Nota1 = document.getElementById ("notaInput1");
    let primeiro = parseInt(Nota1.value)
    const Nota2 = document.getElementById ("notaInput2");
    let segundo = parseInt(Nota2.value)
    const Nota3 = document.getElementById ("notaInput3");
    let terceiro = parseInt(Nota3.value)

    const resultadoDiv = document.getElementById("Verificar");
    resultadoDiv.innerHTML += "";

    if (isNaN(primeiro) || isNaN(segundo) || isNaN (terceiro)) {
        resultadoDiv.innerHTML += "Tente novamente!!";
        return;    
    }

resultadoDiv.innerHTML += `Primeira nota: ${primeiro}<br>`
resultadoDiv.innerHTML += `segunda nota: ${segundo}<br>`
resultadoDiv.innerHTML += `terceira nota: ${terceiro}<br>`

let media = (primeiro + segundo + terceiro) / 3
resultadoDiv.innerHTML += `<strong>Média: ${media.toFixed(1)}</strong><br>`

if (media >= 7) {
    resultadoDiv.innerHTML += `<strong>Aluno Aprovado</strong><br>`
}

else if (media <= 6.9 && media == 5) {
    resultadoDiv.innerHTML += `<strong>Aluno em recuperação</strong><br>`
}

else if (media < 5){
    resultadoDiv.innerHTML += `<strong>Aluno Reprovado</strong><br>`
    }
}

const verificarmedia = document.getElementById ("Media")
verificarmedia.addEventListener("click", resulfinal)