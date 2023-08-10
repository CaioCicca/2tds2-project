// // // // // // let personSimple = "Jonh Doe";

// // // // // // const personObject = new Object();
// // // // // // personObject.firstName = "John";
// // // // // // personObject.lastName = "Doe";
// // // // // // personObject.age = 50;
// // // // // // personObject.eyeColor = "blue";

// // // // // // console.log(personSimple);
// // // // // // console.log(personObject);

// // // // // let personSimple2 = "Jonh Doe";

// // // // // const personObject2 = {
// // // // //     firstName: "John", 
// // // // //     lastName: "Doe",
// // // // //     age: 50,
// // // // //     eyeColor: "blue"
// // // // // }

// // // // // personObject2.age = 10;

// // // // // console.log(personSimple2);
// // // // // console.log(personObject2);

// // // // class User {
// // // //     constructor(name, age){
// // // //         this.name = name;
// // // //         this.age = age;
// // // //     }

// // // //     introduce(){
// // // //         console.log(`Olá, meu nome é 
// // // //         ${this.name} e tenho ${this.age} anos.`);
// // // //     }
// // // // }

// // // // const user1 = new User('João', 30)
// // // // user1.introduce();

// // // class Pizza {
// // //     constructor(base, sauce, toppings, cheese){
// // //         this.base = base;
// // //         this.sauce = sauce;
// // //         this.toppings = toppings;
// // //         this.cheese = cheese;
// // //     }

// // //     getDescription(){
// // //         return `A delicious pizza with ${this.base} base, ${this.sauce} sauce, 
// // //         ${this.toppings} toppings and lots of cheese.`
// // //     }

// // //     getTimerBase(){
// // //         if(this.base == 'traditional'){
// // //             return 10;
// // //         } else if (this. base == 'integral'){
// // //             return 15;
// // //         } else{
// // //             return 'This base does not exist!'
// // //         }
// // //     }

// // //     getTimerCheese(){
// // //         if(this.cheese == 'mozzarella'){
// // //             return 5;
// // //         } else if (this.cheese == 'catupiry'){
// // //             return 7;
// // //         } else{
// // //             return 'This cheese does not exist!'
// // //         }
// // //     }

// // //     getTimerSauce(){
// // //         if(this.sauce == 'tomato'){
// // //             return 3;
// // //         } else if (this.sauce == 'pesto'){
// // //             return 2;
// // //         } else{
// // //             return 'This sauce does not exist!'
// // //         }
// // //     }

// // //     getTimerTopping(){
// // //         if(this.toppings == 'pepperoni'){
// // //             return 1;
// // //         } else if (this.toppings == 'calabresa'){
// // //             return 2;
// // //         } else{
// // //             return 'This topping does not exist!'
// // //         }
// // //     }

// // // }

// // // const myPizza = new Pizza('integral', 'tomato', 'pepperoni', 'mozzarella');
// // // let timeTotalPizza = myPizza.getTimerBase() + myPizza.getTimerCheese() + myPizza.getTimerSauce() + myPizza.getTimerTopping(); 
// // // console.log(myPizza.getDescription());
// // // console.log('Cooking time:' + timeTotalPizza);

// // class Calculator {
// //     add(a, b){
// //         return a + b;
// //     }
// //     multiply(a, b){
// //         return a * b;
// //     }
// //     subtract(a, b){
// //         return a - b;
// //     }
// //     division(a, b){
// //         return a / b
// //     }
// // }

// // const calculator = new Calculator();

// // const sumResult = calculator.add(5, 3)
// // console.log('Sum:', sumResult);

// // const multiplicationResult = calculator.multiply(4, 2)
// // console.log('Multiply:', multiplicationResult);

// // const subtractionResult = calculator.subtract(10, 4)
// // console.log('Subtract:', subtractionResult);

// // const divisionResult = calculator.division(70, 2)
// // console.log('Division:', divisionResult);

// class Witch {
//     constructor(name, patron, house, colorEyes) {
//         this.name = name;
//         this.patron = patron;
//         this.house = house;
//         this.colorEyes = colorEyes;
//     }

//     getName() {
//         return `O nome do bruxo(a) é: ${this.name}`;
//     }
//     getPatron() {
//         return `Seu patrono é: ${this.patron}`;
//     }
//     getHouse() {
//         return `Ele(a) está na casa ${this.house}`;
//     }
// }

// class TypeWitch extends Witch {
//     constructor(name, patron, house, colorEyes, typeWitch) {
//         super(name, patron, house, colorEyes);
//         this.typeWitch = typeWitch;
//     }

//     getTypeWitch() {
//         if (this.typeWitch == 'P') {
//             return 'Este bruxo é sangue puro';
//         } else if (this.typeWitch == 'M') {
//             return 'Este Bruxo é Mestiço'
//         } else {
//             return 'Este é um trouxa'
//         }
//     }
// }

// const harry = new TypeWitch('Harry Potter', 'Cervo', 'Sonserina', 'Verde/Azul?', 'M')
// console.log(harry.getTypeWitch())

class ChamberOfSecrets {
    constructor(name, pwd){
        this.name = name;
        let _pwd = pwd;

        this.verifyPwd = (pwdInput) => {
            return pwdInput == _pwd;
        };
        this.accessToChamber = () =>{
            let pwdInput = prompt("Digite a senha")
            if(this.verifyPwd(pwdInput)){
                console.log(`Bem-Vindo a Câmara Secreta ${this.name}`);
            } else {
                console.log('Acesso negado trouxa!');
            }
        };
    } 
    
    showName() {
        console.log(`Nome do bruxo: ${this.name}`)
    }
}

const myAccess1 = new ChamberOfSecrets('Harry Potter', 'senha123');
myAccess1.showName();

myAccess1.name = 'HP'; //funciona pq o atributo NAME é publico
myAccess1.pwd = '123'; //Não funciona, pq o é atributo privado

myAccess1.accessToChamber();
