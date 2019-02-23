/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos;
var mensaje;
function comenzar()
{
	numeroSecreto = Math.floor(Math.random() * 100);
	console.log(numeroSecreto);

	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
		contadorIntentos = 0;
	

}

function verificar()
{
	var elNumero;

	contadorIntentos= contadorIntentos + 1;

	elNumero = numero.value;
	console.log(elNumero);
	if (elNumero == numeroSecreto) 
	{
		if (contadorIntentos < 4) 
		{
			mensaje=("genio");
		}
		else 
		{
			mensaje=("pura suerte");
		}
	}
	else
	{
		if (elNumero>numeroSecreto) {
		mensaje=("se paso");
		}
		else 
		{
		mensaje=("te falta");
		}
	}
	intentos.value = contadorIntentos;
	alert(mensaje);
	
	
}