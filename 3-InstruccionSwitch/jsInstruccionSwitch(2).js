function mostrar()
{
//tomo la edad  
var mesDelAño;
mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
	case "Agosto":

		info = "Abrigate que hace frio"
	break;
	case "Julio":

		info = "Abrigate que hace frio"

	break;
	case "Septiembre":

		info = "Ya pasamos el frio, ahora calor!!!"

	break;
	case "Octubre":

		info = "Ya pasamos el frio, ahora calor!!!"

	break;
	case "Noviembre":

		info = "Ya pasamos el frio, ahora calor!!!"

	break;
	case "Diciembre":

		info = "Ya pasamos el frio, ahora calor!!!"

	break;
	default:
		info = "Falta para el invierno"
	break;
}

alert(info);




}//FIN DE LA FUNCIÓN