/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/


function mostrar()
{
	var nota;
	var alumnos;
	var sexo;
	var contador;
	var promedio;
	var minNota;
	var minSexo;
	var suma;
	var notasMayorCont;
	var varonesMayorCont;

	contador=0;
	varonesMayorCont=0;
	notasMayorCont=0;
	alumnos=0;
	suma=0;

	while(alumnos<5)
	{
		nota=prompt("Ingrese la nota");
		nota=parseInt(nota);
		while(nota<0 || nota>10)
		{
			nota=prompt("ERROR, reingrese nota");
		}
		sexo=prompt("Ingrese su sexo");
		while(sexo!= "f" && sexo!= "m")
		{
			sexo=prompt("ERROR, reingrese su sexo");
		}
		if (contador==0) 
		{
			minNota=nota;
			minSexo=sexo;
			contador++;
		}
		else
		{
			if (minNota>nota) 
			{
				minNota=nota;
				minSexo=sexo;
			}
			if (sexo == "m" && nota>5) 
			{
				varonesMayorCont++;
			}
		}
		suma=suma+nota;
		alumnos++;
	} 
	promedio=suma/alumnos;
	alert("El promedio es de "+promedio);
	alert("La nota mas baja es "+minNota+" y su sexo es "+minSexo);
	alert("Los varones con mas de nota 5 son "+varonesMayorCont);
}
