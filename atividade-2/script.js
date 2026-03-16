function calculo() {
    // obtendo o numero do input
    const numeroInput1 = document.getElementById("numeroInput1");
    let numero1 = parseInt(numeroInput1.value);

    const numeroInput2 = document.getElementById("numeroInput2");
    let numero2 = parseInt(numeroInput2.value);

    // Elemento do html onde o resultado será exibido
    const resultadoDiv = document.getElementById("resultadocalculo");
    resultadoDiv.innerHTML = "";

    // Verificar se a entrada é um numero válido
    if (isNaN(numero1, numero2) || (numero1), (numero2) === null || (numero1), (numero2) === "") {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido.</p>"
        return; // Este comando sai da função
    }

    // Adicionar titulo para a Média.
    resultadoDiv.innerHTML += `<h2>Soma dos números ${numero1} e ${numero2}</h2>`;

    resultado_soma = numero1 + numero2
    resultado_media = resultado_soma / 2
    resultado_produto = numero1 * numero2
    resultadoDiv.innerHTML += `<p>${numero1} + ${numero2} = ${resultado_soma}</p>`

    resultadoDiv.innerHTML += `<h2>Média dos números ${numero1} e ${numero2}</h2>`;
    resultadoDiv.innerHTML += `<p>${resultado_soma} / ${2} = ${resultado_media}</p>`

    resultadoDiv.innerHTML += `<h2>Produto dos números ${numero1} e ${numero2}</h2>`;
    resultadoDiv.innerHTML += `<p>${numero1} x ${numero2} = ${resultado_produto}</p>`

    if (numero1 > numero2){
        resultadoDiv.innerHTML +=`<h2>${numero1} é maior que o ${numero2}</h2>`
    }

    else if (numero1 == numero2){
        resultadoDiv.innerHTML +=`<h2>${numero1} é igual ${numero2}</h2>`
    }

    else{
        resultadoDiv.innerHTML +=`<h2>${numero2} é maior que o ${numero1}</h2>`
    }
}

const botaoGerar = document.getElementById("Gerarcalculo");
botaoGerar.addEventListener("click",calculo);
