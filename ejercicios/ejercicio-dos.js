"use strict"

/*Utilizando un bucle mostrar la media y la suma de los resultados
introducidos por el usuario hasta que meta uno negativo.*/

var suma= 0;
var contador= 0;

do{
	var numero = parseInt(prompt("Introduce numeros hasta que metas uno negativo"));
	if(isNaN(numero)){
		numero=0;
	}else if(numero >=0){
		suma = suma + numero;
		// suma += numero;

		contador++;
	}

	console.log(suma);
	console.log(contador);

}while(numero >= 0)

alert("La suma de todos los números es"+suma);
alert("La media de todos los números es"+(suma/contador));