const botao = document.querySelectorAll('.iniciaTroco');

botao.forEach((troco) =>{
    troco.addEventListener('click', ()=>{
        
        let nomeProduto = window.prompt('Que produto você está comprando?');

        let txtValorProduto = window.prompt(`Quanto custa o ${nomeProduto} que você está comprando?`);

        let txtPagamento = window.prompt(`Qual foi o valor que você deu para pagar o ${nomeProduto}`);

        let valorProduto = Number(txtValorProduto);

        let pagamento = Number(txtPagamento);

        let troco = pagamento - valorProduto;

        if(troco < 0){
            window.alert("Pagamento insuficiente!");
        } else{
            window.alert(`Você comprou ${nomeProduto} que custou R$${valorProduto}.\nDeu R$${pagamento} em dinheiro e vai receber R$${troco} de troco.\n Volte sempre!`);
        }

    });
});