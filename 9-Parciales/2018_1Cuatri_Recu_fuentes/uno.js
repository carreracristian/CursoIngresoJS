
function mostrar()
{
	var primerMascota;
	var segundaMascota;
	var pesoUno;
	var pesoDos;
	var pesoTotal;

	primerMascota = document.getElementById('mascotaUno').value;

	segundaMascota = document.getElementById('mascotaDos').value;

	primerMascota = pesoUno;
	segundaMacota = pesoDos;

	pesoUno = parseint(pesoUno);
	pesoDos = parseint(pesoDos);

	pesoTotal = ( pesoUno + pesoDos);

	alert("tenes dos mascotas " +primerMascota+ " y " +segundaMacota+ " , que pesan " + pesoUno+ " y " +pesoDos+ " kilos, la suma de los kilos es " + pesoTotal);

}
