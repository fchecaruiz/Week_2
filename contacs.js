class Contact{

   constructor(){
   this.array_objetos = [];
}
printPersons(){
this.array_objetos.forEach((valor) => {
valor.printAll()
valor.printHobbies()})
}
}

module.exports = {Contact};