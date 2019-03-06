/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var elSueldo;
	var cuenta;

	elSueldo=sueldo.value;

	elSueldo=parseInt(elSueldo);
	cuenta=elSueldo*1.1; 
	resultado.value=cuenta;

	
	

	
}
