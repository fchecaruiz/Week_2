const  {Contact} = require ("./contacs");
const  {Person} = require ("./person");


let contact = new Contact();
let persona1 = new Person(80, 1.80, 1972, 2024,["futbol","baloncesto"]);
let persona2 = new Person(70,1.90,1956,2024,["balonmano","tenis"]);

persona2.printAll();
contact.printPersons();

contact.array_objetos.push(persona1);
contact.array_objetos.push(persona2);

contact.printPersons();