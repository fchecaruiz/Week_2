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



module.exports = {Person};