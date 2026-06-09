const carro = {
    marca:"Ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    
    completo: function(){
        return "A merca é "+this.marca+" e o modelo é "+this.modelo;
    }
};


console.log(carro);

console.log(carro.completo())