function mostrar()
{
//tomo la edad  
var mesDelAño;
var info;
mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":

		info = "tiene 30 días"

	break;
	case "Febrero":
		info = "tiene 28 días"
	break;
	default:
		info = "tiene 31 días"
	break;
}
alert(info)

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN