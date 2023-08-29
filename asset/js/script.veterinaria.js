class Pet {
    constructor(tutor, nome, especie, foto, aniversario, idade) {
        this.tutor = tutor;
        this.nome = nome;
        this.especie = especie;
        this.foto = foto;
        this.aniversario = aniversario;
        this.idade = getAge();
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
            msg('Preencha todos os campos!', 'erro')
        } else if (!verificarFoto()) {
            msg('Coloque uma imagem válida!', 'erro')
        } else {
            msg('Cadastrado com sucesso!', 'sucesso')
            this.pets.push(pet);
            limpa();
        }
    }
}

const listaPet = new PetsEngaiolados()

function createPet() {
    let tutor = document.getElementById('tutor').value;
    let nome = document.getElementById('nome').value;
    let especie = document.getElementById('especie').value;
    let foto = document.getElementById('foto').value;
    let aniversario = document.getElementById('aniversario').value;

    const pet = new Pet(tutor, nome, especie, foto, aniversario);

    listaPet.push(pet);
}

function limpa() {
    document.getElementById('tutor').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('especie').value = '';
    document.getElementById('foto').value = '';
    document.getElementById('aniversario').value = '';
}

function msg(msg, type) {
    document.getElementById("msg").innerHTML = msg;
    document.getElementById("msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("msg").classList.add("hidden");
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

function verificarFoto() {

}

function mostrar() {
    msg = ''
    listaPet.pets.forEach(pet => {
        msg = `
        <div>
            <p><strong>${nome}</strong><p>
            <img src="" alt="foto ${nome}">
            <p><strong>${nome}</strong><p>
        </div>
        `
    });
}