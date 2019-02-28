function mostrar()
{

	var contador;
	var numeroMaximo;
	var numeroMinimo;
	var numreroIngresado;
	var respuesta;
	// declarar variables
	
	respuesta='si';
	contador=0;
	numeroMaximo=-9999;
	numeroMinimo=9999;

	while(respuesta!='no')
	{
		numreroIngresado=prompt("Ingrese numero");
		numreroIngresado=parseInt(numreroIngresado);
		
		if (numeroMaximo<numreroIngresado) 
		{
			numeroMaximo=numreroIngresado;
		}
		
		if (numeroMinimo>numreroIngresado) 
		{
			numeroMinimo=numreroIngresado;
		}
		respuesta=prompt("Ingrese no para salir");
	}

	//console.log("el maximo es "+numeroMaximo);
	maximo.value=numeroMaximo;
	minimo.value=numeroMinimo;


}//FIN DE LA FUNCIÓN