function mostrar()
{

	var contador;
	var numeroNegativo;
	var numeroPositivo;
	var numreroIngresado;
	var respuesta;
	var conCero;
	var contadorPares;

	var contadorPositivos;
	var contadorNegativos;
	contador=0
	numeroNegativo=0;
	numeroPositivo=0;
	numreroIngresado=0;
	respuesta='si';
	contadorNegativos=0;
	contadorPositivos=0;
	conCero=0;
	contadorPares=0;
	
	while(respuesta!='no')
	{
		numreroIngresado=prompt("Ingrese numero");
		numreroIngresado=parseInt(numreroIngresado);

		if (numreroIngresado==0) 
			{
				conCero++;
			}
			else if (numreroIngresado<0) 
			{
				numeroNegativo=numeroNegativo+numreroIngresado;
				contadorNegativos++;
			}
				else
				{
				numeroPositivo=numeroPositivo+numreroIngresado;
				contadorPositivos++;
				}
				if (numreroIngresado%2==0) 
				{
					contadorPares++;
				}
			
		
		respuesta=prompt("Ingrese no para salir");
	}

	
	console.log("Suma positivo "+ numeroPositivo);
	console.log("Suma negativo "+ numeroNegativo);
	console.log("Cantidad positivo "+contadorPositivos);
	console.log("Cantidad negativo "+contadorNegativos);
	console.log("cantidad de cero "+ conCero);
	console.log("Cantidad de pares "+ contadorPares);



}//FIN DE LA FUNCIÓN