/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var elSueldo;
	var cuenta;


	elSueldo = importe.value;

	elSueldo=parseInt(elSueldo);
	
	cuenta = elSueldo * 0.75;

	resultado.value =cuenta;
	
}
