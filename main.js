

//1.Funciones

/*Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
Nota: Debes de usar el Switch.
0 - 4: Insuficiente.
5 - 6: Suficiente.
7 - 8: Notable.
9 - 10: Sobresaliente.*/

function nota() {

    let introduceNota = prompt("Introduce tu nota");

    switch (true) {
        case (introduceNota < 5):
          console.log('Insuficiente');
          break;
        case (introduceNota >=5) && (introduceNota <=6):
          console.log('Suficiente');
          break;
        case (introduceNota >=7) && (introduceNota <=8):
          console.log('Notable');
          break;
        case (introduceNota >=9):
          console.log('Sobresaliente');
          break;
        
      }
      return
    }

    nota()


/*Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.*/

function resta(a,b) {
    return a - b;
}

console.log(resta(2,4));

/*Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. 
Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’*/

function duplicaNumero(number){

    if (typeof number != "number") 
     
    {return console.log("Debo ser ejecutada con un número")}
        
     else {console.log(number * 2)}
}

duplicaNumero(5)

// Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter. 
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function caracterInicial(string) {
    if (typeof string != "string")
    {return console.log("Debo ser ejecutada con un string")}
    else if (string === "")
    {return console.log("Debo ser ejecutada con un string no vacío")}
    else {return console.log(string.substring(0, 1))}
}

caracterInicial()


// Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function ultimoCaracter(string) {
    if (typeof string != "string")
    {return console.log("Debo ser ejecutada con un string")}
    else if (string === "")
    {return console.log("Debo ser ejecutada con un string no vacío")}
    else {return console.log(string.slice(-1))}
}

ultimoCaracter("")

// Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'

function cuentaCaracteres(strtonum) {
    if (typeof strtonum != "string")
    {return console.log("Debo ser ejecutada con un string")}
    else 
    {return console.log(strtonum.length)}
}

cuentaCaracteres("maracuyá")


// Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  
// Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

function esPalindromo(texto)  {
    
    let textoReves = texto.split("").reverse().join("")

    if (typeof texto != "string")
    {return console.log("No es un formato correcto")}
    else if (texto === "")
    {return console.log("No es un formato correcto")}
    else if (textoReves === texto)
    {return console.log("Es un palíndromo")}
    else
    {return console.log("No es un palíndromo")}
}

esPalindromo("oso")

// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. 
// Para 2 debería devolver 2.00 €. Si la función no recibe un número debería devolver devolver 'no es un formato correcto'

function getPrecioMostrar(precio){
    if (typeof precio != "number")
    {return console.log("No es un formato correcto")}
    else 
    {return console.log(precio.toPrecision(3) + "€")}
}

getPrecioMostrar(2)

//Crea la función division que acepte como argumento dos números y devuelva el resultado de su división

function division(num1, num2) {
    return num1/num2
}

console.log(division(4,8));

//Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. 
//Ejemplo entrada [3, 6, 8, 2] salida [6, 8]


//No he conseguido sacarlo.


// function arrayRango() {
        
//     let arrayEntrada = [3, 6, 8, 2]

//   }
  
//   arrayRango()



// Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si 
// es o no un número primo, debe devolver true si es primo sino false. Un número primo es aquel que solo puede dividirse 
// entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

function numPrimo  () {

    let n = prompt("Introduce un número");

    {
        if (n<=1) return false;
        for (let i = 2; i <= n-1; i++);
            if (n % i == 0) return false;
        return true; 
    }

}

console.log(numPrimo());

numPrimo ()