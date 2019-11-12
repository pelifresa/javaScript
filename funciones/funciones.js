"use strict"

//Funciones
// Una función es una agrupación de un conjunto de instrucciones

//Defino la función

function porConsola(numero1, numero2){
	console.log("Suma "+(numero1+numero2));
	console.log("Resta "+(numero1-numero2));
	console.log("Multiplicacion "+(numero1*numero2));
	console.log("Division "+(numero1/numero2));
	console.log("**********************************");

}
function porPantalla(numero1, numero2){
	document.write("Suma "+(numero1+numero2)+"<br/>");
	document.write("Resta "+(numero1-numero2)+"<br/>");
	document.write("Multiplicacion "+(numero1*numero2)+"<br/>");
	document.write("Division "+(numero1/numero2)+"<br/>");
	document.write("**********************************");
}

function calculadora(numero1,numero2, mostrar = false){
	//Conjunto de instrucciones a ejecutar

	if(mostrar == false){
		porConsola(numero1,numero2);
	}else{
		porPantalla(numero1,numero2);
	}

	return true;
}

//Llamo a la función
calculadora(1,4);
calculadora(2,5, true);
calculadora(4,5, true);
calculadora(10,8);