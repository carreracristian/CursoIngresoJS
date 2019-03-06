function mostrar()
{
	var suEdad;
	var mensaje;

	suEdad=edad.value;

	if (suEdad<13) 
		{
			mensaje="Es Niño";
		} 
		else if (suEdad>17) 
			{
				mensaje="Es mayor";
			} 
			else 
			{
				mensaje="Es adolescente";
			}

			alert(mensaje);
//tomo la edad  




}//FIN DE LA FUNCIÓN