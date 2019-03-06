/*Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10".*/

function mostrar()
{
	var primerNumero;
	var segundoNumero;
	var mensaje;

	primerNumero=prompt("Ingrese primer numero");
	segundoNumero=prompt("Ingrese segundo numero");
	
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	if (primerNumero==segundoNumero) 
		{
			mensaje=primerNumero+""+segundoNumero;

		} 
		else 
		{
			if (primerNumero>segundoNumero) 
				{
					mensaje=primerNumero- segundoNumero;
				} 
				else 
				{
					mensaje=primerNumero+segundoNumero;
				}
		}

		alert(mensaje);


























	/*var numeroUno;
	var numeroDos;
	var suma;
	var mensaje;

	numeroUno=prompt("Ingrese el primer numero:");
	numeroDos=prompt("Ingrese el segundo numero:");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		mensaje=numeroUno+" "+numeroDos;
	
	} else
	{
		if(numeroUno>numeroDos)
		{
			mensaje=numeroUno-numeroDos;
		
		} else
		{
			suma=numeroUno+numeroDos;

			if(suma>10)
			{
				mensaje="La suma es: "+suma+" y supero el 10";
			}
		}
	}
	alert(mensaje);*/		
}