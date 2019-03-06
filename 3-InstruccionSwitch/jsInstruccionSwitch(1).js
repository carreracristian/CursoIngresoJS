function mostrar()
{
	var mesDelAño;
	var mensaje;

	mesDelAño=mes.value;

	switch(mesDelAño)
	{
		case "Enero":
			mensaje="Que comiences bien el año";
			break;

		case "Marzo":
			mensaje="A clases!!!!";
			break;

		case "Julio":
			mensaje="Se vienen las vacaciones!!";
			break;

		case "Diciembre":
			mensaje="Felices fiestas!!!";
			break;

		default:
			mensaje="Seleccione otro mes";
			break;
	}

	alert(mensaje);
}