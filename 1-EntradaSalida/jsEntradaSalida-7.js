/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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
	
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resta;


	primerNumero = numeroUno.value;
	segundoNumero = numeroDos.value;


	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);


	//hola soy un puto comentario de linea
	/*  */
	
	resta = primerNumero - segundoNumero;

	alert("la resta es " + resta);
	
}

function multiplicar()
{ 

    var primerNumero;
	var segundoNumero;
	var multi;


	primerNumero = numeroUno.value;
	segundoNumero = numeroDos.value;


	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);


	//hola soy un puto comentario de linea
	/*  */
	
	multi = primerNumero * segundoNumero;

	alert("la multiplicacion es " + multi);

	
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var dividir;


	primerNumero = numeroUno.value;
	segundoNumero = numeroDos.value;


	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);


	//hola soy un puto comentario de linea
	/*  */
	
	dividir = primerNumero / segundoNumero;

	alert("la division es " + dividir);
	
}
