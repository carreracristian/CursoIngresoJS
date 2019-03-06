function mostrar()
{
	var elMes;
	var mensaje;

	elMes=mes.value;

	switch(elMes)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		mensaje="Falta para el invierno";
		break;
		case "Julio":
		case "Agosto":
		mensaje="Abrigate que hace frio";
		break;
		default:
		mensaje="Ya pasamos el frio, ahora calor!!";

	}
	alert(mensaje);
//tomo la edad  


}//FIN DE LA FUNCIÓN