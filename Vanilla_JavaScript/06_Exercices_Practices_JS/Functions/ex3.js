/**
 * Hasta ahora hemos visto funciones muy sencillitas, pero pueden ser más complejas.
 * 
 * La siguiente función escribe 'n' veces el texto que le pasamos en 'texto'
 */

 function esribeVeces(n, texto) {
     for (let i=0; i<n; i++) {
         console.log(texto)
     }
 }

 /**
  * Invoca esta función de manera adecuada para que escribe la palabra 'Hola!' 10 veces
  */
 let número=10;
 let palabra='Hola';
 let resultado=esribeVeces(número, palabra);