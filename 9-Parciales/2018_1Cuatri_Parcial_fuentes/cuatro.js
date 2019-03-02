function mostrar()
{
	var primerNumero;
	var segundoNumero;
	var suma;
	var mensaje;

	primerNumero=prompt("Ingrese el numero");
	segundoNumero=prompt("Ingrese el segundo numero");

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	if (primerNumero==segundoNumero) 
		{
			mensaje=primerNumero+"y"+segundoNumero;
		} 
		else 
		{
			if (primerNumero>segundoNumero) 
			{
				mensaje=primerNumero-segundoNumero;
			}
			else
			{
				suma=primerNumero+segundoNumero;
				mensaje=suma;
				if (suma>10) 
				{
					mensaje= "La suma es "+suma+" y supero el 10";
				}
			}
		}	
		alert(mensaje);
}
