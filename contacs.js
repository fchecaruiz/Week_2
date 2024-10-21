class Contact{

    constructor(){
   this.array_objetos = ["futbol","baloncesto"];
}
printPersons(){
this.array_objetos.forEach((valor) => {
   console.log (valor)}
)

}
}

let persona2 = new Contact();
persona2.printPersons();

module.exports = {Contact};