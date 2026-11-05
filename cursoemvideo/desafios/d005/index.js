const converter = window.document.querySelector(".botao");

const txt = window.document.querySelector(".txt");

const res = window.document.getElementById("res");


converter.addEventListener('click', ()=>{
    let txtDistancia = window.prompt("Digite uma distância em metros (m)");

    let distancia = Number(txtDistancia);

    let km = distancia / 1000;
    let hm = distancia / 100;
    let dam = distancia / 10;
    let dm = distancia * 10;
    let cm = distancia * 100;
    let mm = distancia * 1000;

    let demonstrar= [km,hm,dam,dm,cm,mm];
    let txtDemonstracao = ["quilometro", "hecatometro", "decametro", "decimetro", "centimetro", "milimetro"]
    let txtDemonstrar = ["km","hm","dam","dm","cm","mm"];

    txt.innerHTML = `<h1>A distância de ${distancia} metros, corresponde a ...</h1>`

    for(let i = 0; i <= 5; i++){
        res.innerHTML += `<p>${demonstrar[i].toFixed(3)} ${txtDemonstracao[i]} (${txtDemonstrar[i]})</p>`
    }

});