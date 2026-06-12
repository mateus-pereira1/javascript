let desconto = window.document.querySelector(".desconto");
let res = window.document.getElementById("res")

desconto.addEventListener('click', ()=>{
    let produto = window.prompt("Qual é produto que você está comprando ?");
    let precoTxt = window.prompt(`Qual o preço do ${produto}`);

    let preco = Number(precoTxt);

    let desconto = (preco* 0.1);

    let precoFinal = preco - desconto

    res.innerHTML += `<h1>Calculando desconto de 10% para ${produto}</h1>`;

    res.innerHTML += `<p>O preço original era R$${preco.toFixed(2)}.</p>`;

    res.innerHTML += `<p>Você acaba de ganhar R$${desconto.toFixed(2)} de desconto (-10%).</p>`;

    res.innerHTML += `<p>No fim, você vai pagar R$${precoFinal.toFixed(2)} no produto ${produto}.</p>   `;

});