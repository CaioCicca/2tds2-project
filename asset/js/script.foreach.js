// // const companies = ["Apple", "Google", "Facebook"];

// // companies.forEach(company => {
// //     console.log(`Hey, ${company}!`)
// // });

// // const names = ["Whinds", "Freeway", "Teste", "Maria"];

// // names.forEach((name) => {
// //     console.log(`Hi, ${name}!`
// // });

// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // console.log(numbers);

// // numbers.forEach((number, index) => {
// //     if (number % 2 == 0) {
// //         console.log(number);
// //         console.log(`O ${number} está na posição ${index}`)
// //     }
// // });

// const cars = [
//     {
//         marca: "Ford",
//         modelo: "Focus"
//     },
//     {
//         marca: "BMW",
//         modelo: "BMW Z4"
//     },
//     {
//         marca: "Fiat",
//         modelo: "Pálio"
//     },
//     {
//         marca: "Audi",
//         modelo: "A3"
//     },
// ];

// cars.forEach((car) => {
//     console.log(`Marca: ${car.marca} - 
//     Modelo: ${car.modelo}`)
// });

class Car {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
};

class ListCars {
    constructor(){
        this.cars = []
    }

    addCar(car){
        this.cars.push(car)
    }
};

const listaDeCarros = new ListCars();


function addCarList(){
    let inputModel =  document.getElementById("modelo").value;
    let inputBrand =  document.getElementById("marca").value;

    const meuCarro = new Car(inputBrand,inputModel);

    listaDeCarros.addCar(meuCarro);

    console.log(listaDeCarros);

    listaDeCarros.cars.forEach((car) => {
        console.log(`Marca: ${car.marca} - Modelo: ${car.modelo}`)
    })

    clearCar();
}



function clearCar(){
    document.getElementById("marca").value = ""
    document.getElementById("modelo").value = ""
}
