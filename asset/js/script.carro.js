class Carro {
    constructor(marca, modelo, ano, cor, km, preco, imagem){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.km = km
        this.preco = preco
        this.imagem = imagem
    }
}

class ListaCarros {
    constructor(){
        this.carros = [];
    }

    addCar(carro) {
        if(verefyEmpty){
            errorMsg()
        } else {
            this.carros.push(carro)
        }
    }
}

const listaCarros = new ListaCarros;

function criarCarro() {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let ano = document.getElementById("ano").value;
    let cor = document.getElementById("cor").value;
    let km = document.getElementById("km").value;
    let preco = document.getElementById("preco").value;
    let imagem = document.getElementById("imagem").value;

    const carro = new Carro(marca, modelo, ano, cor, km, preco, imagem);

    listaCarros.addCar(carro)
}

function verefyEmpty() {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let ano = document.getElementById("ano").value;
    let cor = document.getElementById("cor").value;
    let km = document.getElementById("km").value;
    let preco = document.getElementById("preco").value;
    let imagem = document.getElementById("imagem").value;

    if(marca == ''){
        
    }
}