"user strict"

//Bucle while - repetición de manera infinita

var year= 2018;

while(year != 1991){
	console.log("Estamos en el año "+year);
	//ejecuta estos

	if(year==2000){
		break;
	}

	year--;
}

// Do while

var years= 30;

do{
	alert("SOLO CUANDO SEA DIFERENTE A 20");
	console.log(years);
	years--;
}while(years > 25)