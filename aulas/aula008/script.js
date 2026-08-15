function verificar(){
    let res = window.document.getElementById("res");
    let anoNascimentoTxt = window.document.querySelector(".anoNascimento");
    let anoNascimento = Number(anoNascimentoTxt.value);
    let date = new Date();
    let anoAtual = date.getFullYear();

    let idade = anoAtual - anoNascimento;

    const sexoSelecionado = window.document.querySelector('input[name="sexo"]:checked');

    if(sexoSelecionado.id === "masc"){
        if(idade < 0){
            window.alert("Idade inválida!");
        } else if(idade >= 0 && idade <= 12){
            res.innerHTML = ``;
            res.innerHTML += `<strong>Detectamos uma criança de ${idade} anos</strong>`;
            res.innerHTML += `<img src="images/criancaM.jpeg" alt="">`;
            
        } else if(idade >= 13 && idade <= 17){
            res.innerHTML = ``;
            res.innerHTML += `<strong>Detectamos uma adolescente de ${idade} anos</strong>`;
            res.innerHTML += `<img src="images/adolescenteM.jpg" alt="">`;
            
        } else if(idade >= 18 && idade <= 59){
            res.innerHTML = ``;
            res.innerHTML += `<strong>Detectamos um adulto de ${idade} anos</strong>`;
            res.innerHTML += `<img src="images/adultoM.jpeg" alt="">`;
            
        } else{
            res.innerHTML = ``;
            res.innerHTML += `<strong>Detectamos um idoso de ${idade} anos</strong>`;
            res.innerHTML += `<img src="images/idosoM.jpg" alt="">`;
        }
    } else{
        if(idade < 0){
            window.alert("Idade inválida!");
        } else if(idade >= 0 && idade <= 12){
            res.innerHTML = ``;
            res.innerHTML += `<strong>Detectamos uma criança de ${idade} anos</strong>`;
            res.innerHTML += `<img src="images/criancaF.jpg" alt="">`;
            
        } else if(idade >= 13 && idade <= 17){
            res.innerHTML = ``;
            res.innerHTML += `<strong>Detectamos uma adolescente de ${idade} anos</strong>`;
            res.innerHTML += `<img src="images/adolescenteF.jpg" alt="">`;
            
        } else if(idade >= 18 && idade <= 59){
            res.innerHTML = ``;
            res.innerHTML += `<strong>Detectamos um adulto de ${idade} anos</strong>`;
            res.innerHTML += `<img src="images/adultoF.jpg" alt="">`;
            
        } else{
            res.innerHTML = ``;
            res.innerHTML += `<strong>Detectamos uma idosa de ${idade} anos</strong>`;
            res.innerHTML += `<img src="images/idosoF.jpg" alt="">`;
        }
    }

  

}