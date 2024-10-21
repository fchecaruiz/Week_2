const {Person} = require ("./person");


let persona1 = new Person(80, 1.80, 1972, 2024,["futbol","baloncesto"]);
console.log("El cálculo de IMC de persona1 es: ", persona1.calculoIMC());
console.log("La edad actual de persona1 es: " + persona1.edad());
console.log(persona1.printAll()); 
console.log(persona1.hobbies);
