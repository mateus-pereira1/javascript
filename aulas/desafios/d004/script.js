let compraProduto = window.document.querySelector(".compraProduto");

compraProduto.addEventListener('click', () =>{
   let produto = window.prompt("Que produto você está comprando ?");
   let valorProdutoTxt = window.prompt(`Quanto custa o ${produto} que você está comprando ?`);
    let valorPagoTxt = window.prompt(`Qual valor você usou para comprar o ${produto}?`);

    let valorProduto = Number(valorProdutoTxt);
    let valorPago = Number(valorPagoTxt);
    let troco

    if(valorProduto > valorPago){
        window.alert("Não possível realizar a compra");
    } else{
        troco = valorPago - valorProduto;
        window.alert(`Você comprou ${produto} que custou ${valorProduto}.\nDeu R$${valorPago} em dinheiro e vai receber R$${troco}.\nVolte sempre!`);
    }
});