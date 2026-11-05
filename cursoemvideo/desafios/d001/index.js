const botoes = window.document.querySelectorAll(".botao");


botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () =>{
        
        if(indice == 0){
            window.alert("Você clicou no 1° Botão!");
        } else if(indice == 1){
            window.alert("Você clicou no 2° Botão!");
        } else if (indice == 2){
            window.alert("Você clicou no 3° Botão!");
        }
    });
});
