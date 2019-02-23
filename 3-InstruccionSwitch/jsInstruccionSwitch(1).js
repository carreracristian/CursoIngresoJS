function mostrar()
{
//tomo la edad  
var mesDelAño;
var info;
mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Enero":

		info = "que comiences bien el año"

	break;
	case "Marzo":

		info = "a clases!"

	break;
	case "Julio":

		info = "se vienen las vacaciones"

	break;
	case "Diciembre":

		info = "felices fiestas"

	break;
	default:
		info = "es un mes comun"
	break;
}
alert(info)




}//FIN DE LA FUNCIÓN