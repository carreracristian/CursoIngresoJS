function mostrar()
{/*Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.
*/
	var marca;
	var peso;
	var temperatura;
	var contadorTemperaturaPar  =0;
	var respuesta = true; //"s"
	var maxPeso;
	var minPeso;
	var maxMarca;
	var contTempMenosCero;
	var flagPesoMaximo = false;
	var promedioPeso;
	var contadorPeso
	var acumuladorPeso;

	
	do
	{
		marca=prompt("Ingrese marca");
		peso=prompt("Ingrese peso");
		while(peso<1 || peso>100)
		{
			peso=prompt("Reingrese peso");
		}
		/*validacion*/
		temperatura=prompt("Ingrese temperatura");
		while(temperatura<-30 || temperatura>30)
		{
		/*validacion*/
		temperatura=prompt("Reingrese temperatura");

		if (temperatura%2==0) 
		{
			contadorTemperaturaPar++;
		}
		}
		if (flagPesoMaximo==false || peso>maxPeso) 
		{
			maxMarca=marca;
			maxPeso=peso;
			flagPesoMaximo=true;
		}
		if (flagPesoMaximo== false || peso<miPeso) 
		{
			minPeso= peso;
			flagPesoMaximo= true;
		}

		if (temperatura<0) 
		{
			contTempMenosCero++;
		}
		contadorPeso++;
		acumuladorPeso=acumuladorPeso+peso;



		respuesta=confirm("Desea ingresar otro producto?");//respuesta=prompt("Desea ingresar otro producto?");
		promedio=acumuladorPeso/contadorPeso;

	}while(respuesta ==true) //while(respuesta =="s")	

}
