function converter(){
    
    let res = window.document.getElementById('res')
    let tempTxt = window.prompt("Digite uma temperatura em Celcius");
    let temp = Number(tempTxt);

    let kel = temp + 273.15;
    let far = (temp*1.8)+32;

    res.innerHTML += `<h1>A temperatura de ${temp}°C, corresponde a...`;

    res.innerHTML += `<p>${kel.toFixed(2)}°K (Kelvin)</p>`;
    res.innerHTML += `<p>${far.toFixed(2)}°F (Fahrenheit)</p>`;
    


}