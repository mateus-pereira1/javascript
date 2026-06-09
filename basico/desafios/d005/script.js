let converter = window.document.querySelector('.converter');
let res = window.document.getElementById("res");
let contador = 0;
let contador1 = 3;

let nomeUnidade = ['quilômetro', 'hectômetros', 'decâmetros', 'decímetros', 'centímetros', 'milímetros'];
let unidadeAbb = ['Km', 'Hm', 'Dam', 'dm', 'cm', 'mm'];

converter.addEventListener('click', () => {
    let distanciaTxt = window.prompt(`Digite uma distância em metros (m)`);
    let distancia = Number(distanciaTxt);
    let distanciaConvertida

    res.innerHTML+= `<h1>A distância de ${distancia} metros, corresponde a...`;

    for(let i = 1000; i >= 10; i/=10 ){
        distanciaConvertida = distancia/i
        res.innerHTML += `${distanciaConvertida} ${nomeUnidade[contador]} (${unidadeAbb[contador]})<br>`;
        contador++;
    }

    for(let i = 10; i <= 1000; i*=10 ){
        distanciaConvertida = distancia*i
        res.innerHTML += `${distanciaConvertida} ${nomeUnidade[contador1]} (${unidadeAbb[contador1]})<br>`;
        contador1++;
    }
});


