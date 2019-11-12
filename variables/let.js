"user strict"

//Pruebas con let y var

//Prueba con var
var numero = 40;
console.log(numero);

if(true){
	var numero = 50;
	console.log(numero); //valor 50
}

console.log(numero); // valor 50

//Prueba con let

var texto= "Curso Js";
console.log(texto); // valor Curso Js

if(true){
	let texto= "Curso Laravel 5";
	console.log(texto)
}

console.log(texto);