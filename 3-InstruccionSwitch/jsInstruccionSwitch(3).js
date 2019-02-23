function mostrar()
{
//tomo la edad  
var mesDelAño;
var info;
mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
	
	case "Febrero":

		info = "Este mes no tiene más de 29 días"

	break;
	default:
		info = "Este mes tiene 30 o más días"
	break;
}
alert(info)


//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN