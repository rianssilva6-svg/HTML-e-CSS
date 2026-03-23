function quant() {

    const numeroInput1 = document.getElementById("numeroInput1");
    let quantidade = parseInt(numeroInput1.value);

    const resultadoDiv = document.getElementById("Valorgerado");
    resultadoDiv.innerHTML = "";

    if (isNaN(quantidade) || quantidade <= 0) {
        resultadoDiv.innerHTML = "⚠️ Digite uma quantidade válida!";
        return;
    }

    let preco;
    let total;

    // Regra de preço
    if (quantidade < 12) {
        preco = 1.30;
    } else {
        preco = 1.00;
    }

    // Cálculo do total
    total = quantidade * preco;

    // Exibir resultado com 2 casas decimais
    resultadoDiv.innerHTML += `<strong>Valor da compra: R$ ${total.toFixed(2)}</strong>`;
}

// Evento no botão correto
const botao = document.getElementById("Valor");
botao.addEventListener("click", quant);