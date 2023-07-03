//Variable que almacenara la opcion elegida
let opcion;

//Los operandos estan seteados en null de entrada para poder comprobar que se ha ingresado un operando antes de operar
let operando1 = null; 
let operando2 = null;

//hiceCalculo sera false de entrada para comprobar que antes de mostrar los resultados, el calculo sea realizado
let hiceCalculo = false;

//Variables que almacenaran los resultados de las operaciones
let resultadoSuma;
let resultadoResta;
let resultadoDivision;
let resultadoMultiplicacion;

//Comienzo del programa:
alert("Bienvenidos a la calculadora");
do {
   
   opcion = getNumero(
      "MENU\nIngrese una opcion:\n1. Ingresar primer operando:\n2. Ingresar segundo operando:\n3. Calcular todas las operaciones\n4. Informar resultados\n5. Salir",
      "No ha ingresado una opcion valida",
      1,5);

   switch (opcion) {
      case 1:
         operando1 = getNumero(
            "Ingrese el primer numero",
            "No ha ingresado un número válido. Por favor reingrese",
            -Number.MAX_VALUE,
            Number.MAX_VALUE);
         break;
      case 2:
         operando2 = getNumero(
            "Ingrese el segundo numero",
            "No ha ingresado un número válido. Por favor reingrese",
            -Number.MAX_VALUE,
            Number.MAX_VALUE);
         break;
      case 3:
         if (operando1 != null && operando2 != null) //Si se han ingresado ambos operandos
         {
            hiceCalculo = true;
            resultadoSuma = sumar(operando1, operando2);
            resultadoResta = restar(operando1, operando2);
            resultadoDivision = dividir(operando1, operando2);
            resultadoMultiplicacion = multipicar(operando1, operando2);
            alert("Calculado con exito!");
         } else {
            alert("Debe Ingresar los dos operandos primero");
         }
         break;
      case 4:
         if (hiceCalculo) //Si el calculo fue realizado 
         {
            alert(concatenarResultados(operando1, operando2, resultadoSuma,resultadoResta,resultadoDivision,resultadoMultiplicacion));
            if(confirm("Quiere volver a operar?")) 
            {
               //En caso de seguir operando reseteo las variables que definen si los operandos existen y si el calculo fue hecho
               hiceCalculo = false;
               operando1 = null;
               operando2 = null;
            } else opcion = 5;
         } else {
            alert("Debe ingresar los operandos y luego realizar el calculo\n");
         }
         break;
      case 5:
         alert("Gracias, vuelva prontos!");
         break;
   } //Fin Switch
} while (opcion != 5);

/**
 * Se ocupa de hacer el pedido de un número.
 * Mientras lo que se ingrese no sea un número o no esté en el rango, volverá a pedirlo.
 * @param {string} msj - El mensaje para pedir el número.
 * @param {string} msjError - El mensaje de error.
 * @param {number} min - El valor mínimo que establecerá el rango.
 * @param {number} max - El valor máximo que establecerá el rango.
 * @returns {number} - El número ingresado.
 */
function getNumero(msj, msjError, min, max) {
   let numero;

   while (true) {
      numero = prompt(msj);

      if (isNaN(numero) || numero < min || numero > max) alert(msjError);
      else break;
   }
   return parseFloat(numero);
}

/**
 * Se ocupa de realizar la suma de dos numeros
 * @param {number} operandoUno - primer operando
 * @param {number} operandoDos - segundo operando
 * @returns {number} - La suma de los dos numeros./ NULL - Si lo que llega no es un numero
 */
function sumar(operandoUno, operandoDos) {
   if (!isNaN(operandoUno) && !isNaN(operandoDos))
      return operandoUno + operandoDos;
   return null;
}

/**
 * Se ocupa de realizar la resta de dos numeros
 * @param {number} operandoUno - primer operando
 * @param {number} operandoDos - segundo operando
 * @returns {number} - La resta de los dos numeros./ NULL - Si lo que llega no es un numero
 */
function restar(operandoUno, operandoDos) {
   if (!isNaN(operandoUno) && !isNaN(operandoDos))
      return operandoUno - operandoDos;
   return null;
}

/**
 * Se ocupa de realizar la multiplicacion de dos numeros
 * @param {number} operandoUno - primer operando
 * @param {number} operandoDos - segundo operando
 * @returns {number} - El producto de los dos numeros./ NULL - Si lo que llega no es un numero
 */
function multipicar(operandoUno, operandoDos) {
   if (!isNaN(operandoUno) && !isNaN(operandoDos))
      return operandoUno * operandoDos;
   return null;
}

/**
 * Se ocupa de realizar la division de dos numeros
 * @param {number} operandoUno - primer operando
 * @param {number} operandoDos - segundo operando
 * @returns {number} - La division de los dos numeros./ NULL - Si lo que llega no es un numero o el segundo operando es 0
 */
function dividir(operandoUno, operandoDos) {
   if (!isNaN(operandoUno) && !isNaN(operandoDos) && operandoDos != 0)
      return operandoUno / operandoDos;
   return null;
}

/**
 * Se ocupa de concatenar en un mensaje los valores de los operandos ingresados y los resultados de las operaciones.
 * @param {number} op1 - Primer operando
 * @param {number} op2 - Segundo operando
 * @param {number} resultadoSuma - El resultado de la suma
 * @param {number} resultadoResta - El resultado de la resta
 * @param {number} resultadoDivision - El resultado de la division
 * @param {number} resultadoMultiplicacion - El resultado de la multiplicacion
 * @returns {string} La cadena conctatenada
 */
function concatenarResultados(op1, op2, resultadoSuma,resultadoResta,resultadoDivision,resultadoMultiplicacion)
{
   let strOperando1;
   let strOperando2;
   let strResultadoSuma;
   let strResultadoResta;
   let strResultadoDivision;
   let strResultadoMultiplicacion;

   //Cadenas con los operandos
   strOperando1 = "Operando 1: " + op1 + "\n";
   strOperando2 = "Operando 2: " + op2 + "\n";

   //Si pudo hacer la operacion guardo la cadena con el resultado, de llegar un null guardo el msj de error
   //Suma
   if (resultadoSuma != null) 
      strResultadoSuma = `El resultado de la suma es: ${resultadoSuma.toFixed(2)}\n`;
   else 
      strResultadoSuma = "No se pudo realizar la suma\n";

   //Resta
   if (resultadoResta != null)
      strResultadoResta = `El resultado de la resta es: ${resultadoResta.toFixed(2)}\n`;
   else 
      strResultadoResta = "No se pudo realizar la resta\n";

   //Division
   if (resultadoDivision != null)
      strResultadoDivision = `El resultado de la division es: ${resultadoDivision.toFixed(2)}\n`;
   else
      strResultadoDivision = "No se pudo realizar la division. No se puede dividir por 0\n";

   //Multiplicacion
   if (resultadoMultiplicacion != null)
      strResultadoMultiplicacion = `El resultado de la multiplicacion es: ${resultadoMultiplicacion.toFixed(2)}\n`;
   else
      strResultadoMultiplicacion = "No se pudo realizar la division\n";

   return strOperando1.concat(strOperando2,strResultadoSuma,strResultadoResta,strResultadoDivision,strResultadoMultiplicacion);
}