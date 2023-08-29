class Pet {
    constructor(tutor, nome, especie, foto, aniversario, idade) {
        this.tutor = tutor;
        this.nome = nome;
        this.especie = especie;
        this.foto = foto;
        this.aniversario = aniversario;
        this.idade = this.getAge();
    }

    getAge() {
        const hoje = new Date();
        const aniversario = new Date(this.aniversario);
        let idade = hoje.getFullYear() - aniversario.getFullYear();
        const monthDiff = hoje.getMonth() - aniversario.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && hoje.getDate() < aniversario.getDate())) {
            idade--;
        }
        return idade;
    }
}

class PetsEngaiolados {
    constructor() {
        this.pets = []
    }

    add(pet) {
        if (campos()) {
            erroMsg('Preencha todos os campos!')
        } else if (!verificarFoto(pet.foto)) {
            erroMsg('Coloque uma imagem válida!')
        } else {
            msg('Cadastrado com sucesso!')
            this.pets.push(pet);
            limpa();
        }
    }
}

const listaPet = new PetsEngaiolados()

function criarPet() {
    let tutor = document.getElementById('tutor').value;
    let nome = document.getElementById('nome').value;
    let especie = document.getElementById('especie').value;
    let foto = document.getElementById('foto').value;
    let aniversario = document.getElementById('aniversario').value;

    const pet = new Pet(tutor, nome, especie, foto, aniversario);

    listaPet.add(pet);
    console.log(listaPet)
}

function limpa() {
    document.getElementById('tutor').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('especie').value = '';
    document.getElementById('foto').value = '';
    document.getElementById('aniversario').value = '';
}

function msg(msg) {
    document.getElementById("msg").innerHTML = msg;
    document.getElementById("msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("msg").classList.add("hidden");
    }, 4000);
}

function erroMsg(msg) {
    document.getElementById("msgErro").innerHTML = msg;
    document.getElementById("msgErro").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("msgErro").classList.add("hidden");
    }, 4000);
}

function campos() {
    let tutor = document.getElementById('tutor').value;
    let nome = document.getElementById('nome').value;
    let especie = document.getElementById('especie').value;
    let foto = document.getElementById('foto').value;
    let aniversario = document.getElementById('aniversario').value;

    if (tutor == '' || nome == '' || especie == '' || foto == '' || aniversario == '') {
        return true;
    } else {
        return false;
    }
}

function verificarFoto(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}

function mostrar() {
    document.getElementById("main").classList.add("hidden");
    document.getElementById("cadastro").classList.remove("hidden");

    let msg = ''
    listaPet.pets.forEach(pet => {
        msg += `
        <div id="animal">
            <p><strong>${pet.nome}</strong></p>
            <img src="${pet.foto}" alt="foto ${pet.nome}">
            <div id="start">
            <p><strong>${pet.tutor}</strong></p>
            <p><strong>${pet.especie}</strong></p>
            <p><strong>${pet.aniversario}</strong></p>
            <p><strong>${pet.getAge()}</strong></p>
            </div>
        </div>
        `
    });
    document.getElementById('cadastro').innerHTML = msg
}

function voltar() {
    document.getElementById("main").classList.remove("hidden");
    document.getElementById("cadastro").classList.add("hidden");
} 