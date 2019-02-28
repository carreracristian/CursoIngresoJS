function mostrar()
{

	var contador;
	var numeroMaximo;
	var numeroMinimo;
	var numreroIngresado;
	var respuesta;
	//var bandera;
	// declarar variables
	
	respuesta='si';
	contador=0;
	//numeroMaximo=-9999;
	//numeroMinimo=9999;
	//bandera=0;

	while(respuesta!='no')
	{
		numreroIngresado=prompt("Ingrese numero");
		numreroIngresado=parseInt(numreroIngresado);
		if (contador==0) 
		{
			numeroMaximo=numreroIngresado;
			numeroMinimo=numreroIngresado;
		}
		else
		{
			if (numeroMaximo<numreroIngresado) 
			{
				numeroMaximo=numreroIngresado;
			}
		
			if (numeroMinimo>numreroIngresado) 
			{
			numeroMinimo=numreroIngresado;
			}
			
		}
		contador++;
		respuesta=prompt("Ingrese no para salir");
	}

	//console.log("el maximo es "+numeroMaximo);
	maximo.value=numeroMaximo;
	minimo.value=numeroMinimo;


}//FIN DE LA FUNCIÓN