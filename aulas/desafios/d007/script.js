let converter = window.document.querySelector(".converter");

let res = window.document.getElementById("res");

converter.addEventListener('click', ()=>{
    let dolarTxt = window.prompt("Qual a cotação do dólar ");
    let realTxt = window.prompt("Quantos reais você tem na carteira ?");

    let dolar = Number(dolarTxt);
    let real = Number(realTxt);

    let valorConvertido = real / dolar;

    res.innerText = `O valor de R$${real} convertido em dólares, fica: US$${valorConvertido}`;
});