function mostrar()
{

	var numero = prompt("ingrese un  entre 0 y 10.");
	while(numero<0 || numero>10)
	{
		numero = prompt("Error ingrese un  entre 0 y 10.");
	}
	alert(numero);

}//FIN DE LA FUNCIÓN