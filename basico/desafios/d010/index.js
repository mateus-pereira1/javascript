let res = window.document.getElementById("res");
let calcular = window.document.getElementById("calcular");

calcular.addEventListener('click', ()=>{
    
    let aTxt = window.prompt("Qual o valor de a");
    let bTxt = window.prompt("Qual o valor de b");
    let cTxt = window.prompt("Qual o valor de c");

    let delta = b*b - (4*(a)*(c))

    res.innerHTML += `<h1>Resolvendo Bhaskara</h1>`;
    res.innerHTML += `<p>A equação atual é ${a}x²+${b}x+${c}</p>>`;
});