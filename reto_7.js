class Person{

        constructor(peso, altura,yearOfBirth, ano_actual, hobbies) {
            this.peso = peso;
            this.altura = altura;
            this.yearOfBirth = yearOfBirth;
            this.ano_actual = ano_actual;
            this.hobbies = hobbies;
        }
    
    calculoIMC() {
    return this.peso / (this.altura * this.altura);
    }
    
    edad() {
    return this.ano_actual - this.yearOfBirth;
    }
    printAll() {
    console.log("peso ", "-" , this.peso);
    console.log("altura ", "-",this.altura);
    console.log("Año nacimiento ", "- ", this.yearOfBirth);
    console.log("Año actual ","-", this.ano_actual);
    }
    printHobbies(){
    console.log (this.hobbies);
    }
}
    
    let persona1 = new Person(80, 1.80, 1972, 2024,["futbol","baloncesto"]);
    console.log("El cálculo de IMC de persona1 es: ", persona1.calculoIMC());
    console.log("La edad actual de persona1 es: " + persona1.edad());
    console.log(persona1.printAll()); 
    console.log(persona1.hobbies);
    constructor(peso,altura,yearOfBirth, ano_actual,hobbies) 
    this.peso = peso; 
