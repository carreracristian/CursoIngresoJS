/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{	
	var pNumero;
	var sNumero;
	var suma;

	pNumero=numeroUno.value;
	sNumero=numeroDos.value;

	pNumero=parseInt(pNumero);
	sNumero=parseInt(sNumero);

	suma=pNumero+sNumero;

	alert(suma);


	



	//alert("la suma es "+primerNumero+segundoNumero);
	//lo de arriba no fu nciona concatena todo

 
}

