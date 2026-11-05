let txtNum = document.querySelectorAll('.antesDepois');


txtNum.forEach(antesDepois =>{
    antesDepois.addEventListener('click', ()=>{
        let txtNum = window.prompt("Digite um número inteiro qualquer");

        let num = Number(txtNum);

        if(Number.isInteger(num)){
            let antes = num -1;
            let depois = num + 1;

            window.alert(`Antes de ${num}, temos o número ${antes}\nDepois de ${num}, temos o número ${depois}`);
        }else{
            window.alert("Digite um número válido!");
        }
    });
});