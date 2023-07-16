/*
Ejemplo de tipos de
datos en JavaScript
*/
// Tipo de dato string
var nombre = "Jonathan";
console.log(nombre);

nombre = 10.5;
console.log(typeof nombre);

// Tipo de dato numérico
var numero = 10;
console.log(numero);

//Tipo de dato Object
var objeto = {
    nombre: "Estefania",
    apellido: "Sicouret",
    edad: "44 años",
    telefono: "0999484867"
}
console.log(objeto);
console.log(typeof objeto);

//Tipo de datos Boolean
var bandera = false;
console.log(bandera);
console.log(typeof bandera);

//Tipo de datos function
function miFuncion(){

}

console.log(miFuncion);
console.log(typeof miFuncion)

//Tipo de dato Simbol
var simbolo=Symbol("mi simbolo")
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una función
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(x);
console.log(typeof x);

//tipo de dato null=ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);



//Tipo de clase es una 