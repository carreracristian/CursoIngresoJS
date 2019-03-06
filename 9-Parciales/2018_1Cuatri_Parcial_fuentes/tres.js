function mostrar()
{
	var precio;
	var descuento;
	var descontar;
	var precioFinal;

	precio=prompt("Ingrese el precio");
	descuento=prompt("Ingrese el descuento");

	precio=parseInt(precio);
	descuento=parseInt(descuento);

	descontar=precio*descuento/100;

	precioFinal=precio-descontar;

	elPrecioFinal.value=precioFinal;






/*var precio;
	var porcentajeDescuento;
	var precioFinal;

	precio=prompt("Ingrese el precio:");
	porcentajeDescuento=prompt("Ingrese el % de descuento:");

	precio=parseInt(precio);
	porcentajeDescuento=parseInt(porcentajeDescuento);

	precioFinal= precio - (precio*porcentajeDescuento/100);

	elPrecioFinal.value="El precio final: "+precioFinal;*/





}