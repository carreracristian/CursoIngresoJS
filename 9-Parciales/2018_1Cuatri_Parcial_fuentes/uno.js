
function mostrar()
{

	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("Ingrese el ancho");
	largo = prompt("Ingrese el largo");

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	perimetro = (ancho+largo)*2;

	alert("El perimetro es de "+ perimetro);


}
