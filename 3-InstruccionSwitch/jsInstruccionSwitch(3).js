function mostrar()
{
	var elMes;
	var mensaje;

	elMes=mes.value;

	switch(elMes)
	{
		case "Febrero":
		mensaje=" Este mes no tiene más de 29 días";
		break;
		default:
		mensaje="Este mes tiene 30 o más días";


	}
	alert(mensaje);
//tomo la edad  


//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN