function reajustarSalario(){
    let nomeFuncionario = window.prompt("Qual o nome do funcionário ?");
    let salarioTxt = window.prompt(`Qual é o salário de ${nomeFuncionario}`);
    let porcentagemTxt = window.prompt(`O salário de ${nomeFuncionario} vai ser reajustado em qual porcentagem ?`);

    let salario = Number(salarioTxt);
    let porcentagem = Number(porcentagemTxt);
    let aumento = (salario*(porcentagem/100));
    let novoSalario = salario + aumento;

    let res = window.document.getElementById("res");

    res.innerHTML += `<h2>${nomeFuncionario} recebeu um aumento salarial!</h2>`;
    res.innerHTML += `<p>O salario atual era R$${salario}.</p>`;
    res.innerHTML += `<p>Com aumento de ${porcentagem}%, o salário vai aumentar R$${aumento} no próxiumo mês.</p>`;
    res.innerHTML += `<p>E a partir daí, ${nomeFuncionario} vai passar a ganhar ${novoSalario}</p>`;
    


}