function mostrar()
{
//tomo la edad  
var laHora;
laHora = document.getElementById('hora').value;
var mensaje;

laHora=parseInt(laHora);

switch(laHora)
{
	case 20:
	case 21:
	case 22:
	case 23:
	case 24:
	case 0:
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
		mensaje="Es de noche";
		break;

	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
		mensaje="Es de mañana";
		break;

	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
	case 17:
	case 18:
	case 19:
		mensaje="Es de tarde";
		break;

	default:
		mensaje="La hora no existe";
		break;
}

alert(laHora+": "+mensaje);

/*switch(laHora)
{
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
	case 20:
	case 21:
	case 22:
	case 23:
	case 24:
	info="Es de noche";
	break;
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
	info="Es de mañana";
	break;
	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
	case 17:
	case 18:
	case 19:
	info="Es de tarde";
	break;
	default:
	info:"la hora no existe"
	break;


}
alert(info);*/



}//FIN DE LA FUNCIÓN