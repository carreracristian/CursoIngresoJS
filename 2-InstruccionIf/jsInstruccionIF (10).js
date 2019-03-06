function mostrar()
{
	var nota;
	var mensaje;

	nota = Math.floor((Math.random() * 10) + 1);
	if (nota>8) 
		{
			mensaje="EXCELENTE";
		} 
		else 
			{
				if (nota>3) 
				{
					mensaje="APROBO";
				} 
				else 
				{
					mensaje="Vamos, la proxima se puede";
				}	
			}
	alert("Su nota es "+nota+" "+mensaje);
}//FIN DE LA FUNCIÓN