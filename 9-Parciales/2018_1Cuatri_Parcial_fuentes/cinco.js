function mostrar()
{/*pedir el ingreso de un planeta del sistema solar 
Si es la tierra mostrar "acá vivimos". 
Si está más cerca del sol, "". 
Si está más lejos del sol, "acá hace más frio". 
Si no es un planeta valido informarlo. 
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).*/

	var planeta;

	planeta=prompt("Ingrese el planeta");

	switch(planeta)
	{
		case "mercurio":
		case "venus":
			mensaje="acá hace más calor";
			break;
		case "tierra":
			mensaje="aca vivimos";
			break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluton":
			mensaje="aca hace mas frio";
			break;
		default:
			mensaje="Este planeta no existe";

	}	

	alert(mensaje);































	/*var planeta=prompt("Ingrese un planeta");
	var mensaje;

	switch(planeta)
	{
		case "Mercurio":
		case "Venus":
			mensaje="Aca hace mas calor";
		break;	
		case "Tierra":
			mensaje="Aca vivimos";
		break;
		case "Marte":
		case "Jupiter":
		case "Saturno":
		case "Urano":
		case "Neptuno":
		case "Pluton":
			mensaje="Aca hace mas frio";
		break;
		default:
			mensaje="Planeta no valido";
	}
	alert(mensaje);*/
}
