/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;


	primerNumero = numeroUno.value;
	segundoNumero = numeroDos.value;


	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);


	//hola soy un puto comentario de linea
	/*  */
	
	suma = primerNumero + segundoNumero;

	alert("la suma es " + suma);




	//alert("la suma es "+primerNumero+segundoNumero);
	//lo de arriba no fu nciona concatena todo

 
}

