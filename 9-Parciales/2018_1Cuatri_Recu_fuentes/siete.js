/*
Realizar el algoritmo que permita el ingreso por prompt de las velocidades en
kilómetros (validar entre 0 y 250) , el tipo de combustible, validar el tipo “s” o “l”
para solido o liquido, de 5 vehículos de prueba ,informar por document.write:
1-El promedio de las velocidades totales.
2-La velocidad más baja y el tipo de combustible de ese vehículo.
3-La cantidad de combustibles líquidos que su velocidad supere los 100
kilómetros.
4-la velocidad más alta de los de combustible sólido
*/

function mostrar()
{
	var velocidad;
	var combustible;
	var contador;
	var acumuladorVelocidades;
	var promedioVelocidades;
	var minVelocidad;
	var minCombustible;
	var liquidoPor100;
	var maxVelocidad;
	liquidoPor100=0;
	contador=0;
	acumuladorVelocidades=0;

	while(contador<5)
	{
		velocidad=prompt("Ingrese velocidad");
		velocidad=parseInt(velocidad);

		while(velocidad<0 || velocidad>250)
		{
			velocidad=prompt("Reingrese velocidad");
			velocidad=parseInt(velocidad);
		}
		combustible=prompt("Ingrese combustible");
		while(combustible!= "s" && combustible!= "l")
		{
			combustible=prompt("Reingrese combustible");
		}
		if (contador==0) 
		{
			minVelocidad=velocidad;
			minCombustible=combustible;
		}
		else
		{
			if (minVelocidad>velocidad) 
			{
				velocidad=minVelocidad;
				combustible=minCombustible;
			}
		}
		if (velocidad>100 && combustible== "l") 
		{
			liquidoPor100++;
		}
		
		if (combustible== "s") 
		{
			if (contador==0) 
				{
					maxVelocidad=velocidad;
				} 
				else 
				{
					if (maxVelocidad<velocidad) 
					{
						velocidad=maxVelocidad;
					}

				}
		}
	}
	acumuladorVelocidades=acumuladorVelocidades+velocidad;
	contador++;

	promedioVelocidades=acumuladorVelocidades/5;

document.write("1-El promedio de las velocidades totales. "+promedioVelocidades);
document.write("2-La velocidad más baja y el tipo de combustible de ese vehículo. "+minVelocidad+minCombustible);
document.write("3-La cantidad de combustibles líquidos que su velocidad supere los 100 kilómetros. "+liquidoPor100);
document.write("4-la velocidad más alta de los de combustible sólido "+maxVelocidad);










































	/*var velocidad;
	var combustible;
	var contador;
	var promedioVelocidades;
	var acumuladorVelocidades;
	var minVelocidad;
	var minCombustible;
	var combustible100;
	var velCombustibleSolido;
	var maxVelocidad;
	contador=0;
	acumuladorVelocidades=0;
	combustible100=0;

	while(contador<5)
	{
		velocidad=prompt("Ingrese velocidad (debe ser entre 0 y 250km): ");
		velocidad=parseInt(velocidad);

		while(velocidad<0 || velocidad>250)
		{
			velocidad=prompt("Reingrese velocidad");
			velocidad=parseInt(velocidad);
			
		}
		combustible=prompt("Ingrese el combustible");
		while(combustible!= "s" && combustible!= "l")
		{
			combustible=prompt("Reingrese combustible");

		}

		if (contador==0) 
		{
			minVelocidad=velocidad;
			minCombustible=combustible;
		}
		else
		{		
			if (minVelocidad>velocidad) 
			{
				velocidad=minVelocidad;
				minCombustible=combustible;		
			}

		}
		if (velocidad>100 && combustible== "l") 
		{
			combustible100++;
		}
		


		if(combustible=="s")
		{
			if(contador==0)
			{
				maxVelocidad=velocidad;
			
			} else
			{
				if(velocidad>maxVelocidad)
				{
					maxVelocidad=velocidad;
				}
			}
		}





		

		acumuladorVelocidades=acumuladorVelocidades+velocidad;
		
		contador++;
	}

	promedioVelocidades=acumuladorVelocidades/5;
	document.write("1-El promedio de las velocidades totales "+promedioVelocidades);
	document.write("<br>2-La velocidad más baja y el tipo de combustible de ese vehículo."+minVelocidad+""+minCombustible);
	document.write("<br>3-La cantidad de combustibles líquidos que su velocidad supere los 100 kilómetros."+combustible100);
	document.write("<br>4-la velocidad más alta de los de combustible sólido "+maxVelocidad);

	*/
}





