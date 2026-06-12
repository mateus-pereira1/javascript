setInterval(() => {
    
    let dateKey = new Date();
    let horas = dateKey.getHours();
    let imagem = window.document.querySelector(".imagem")

    let mensagem = window.document.querySelector('.mensagem');

    if(horas > 6 && horas < 12){
        mensagem.innerText = `Agora são ${horas} horas.`;
        imagem.innerHTML = `<img src="images/dia.jpg" alt="">`;
        document.body.style.background = "#e2cd9f";
    } else if(horas >= 12 && horas < 18){
        mensagem.innerText = `Agora são ${horas} horas.`;
        imagem.innerHTML = `<img src="images/tarde.jpg" alt="">`;
        document.body.style.background = "#b9846f";
    } else{
        mensagem.innerText = `Agora são ${horas} horas.`;
        imagem.innerHTML = `<img src="images/noite.jpg" alt="">`;
        document.body.style.background = "#515154";
    }
}, 1000);