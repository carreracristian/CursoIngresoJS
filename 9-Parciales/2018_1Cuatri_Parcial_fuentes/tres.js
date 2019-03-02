function mostrar()
{
	var precio;
	var porcentajeDescuento;
	var precioDescuento;
	var descuento;

	precio=prompt("Ingrese el precio");
	porcentajeDescuento=prompt("Ingrese el descuento");

	precio=parseInt(precio);
	porcentajeDescuento=parseInt(porcentajeDescuento);

	descuento=precio*porcentajeDescuento/100;
	precioDescuento=precio-descuento;

	document.getElementById('elPrecioFinal').value = precioDescuento;

}
