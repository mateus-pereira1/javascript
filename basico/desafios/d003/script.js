let botao = window.document.querySelector(".botao");

botao.addEventListener('click', ()=>{
    let numTxt = window.prompt("Digite um número inteiro qualquer");

    let num = Number(numTxt);

    if(!(Number.isInteger(num))){
        window.alert("Digite um número inteiro!")
    } else{
            let antes = num -1
        
            let depois = num + 1

            window.alert(`Antes de ${num} temos o número ${antes}\nDepois de ${num} temos o número ${depois}.`);
        }
});