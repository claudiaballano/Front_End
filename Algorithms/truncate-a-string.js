/**
 * Basic Algorithm Scripting: Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
 */

function truncateString(str, num) {
    /**
     * Si 'num' es mayor que la longitud del stirng, no hace falta hacer nada, porque nos vamos a quedar con todo el string
     */
    if (str.length>num){
      let puntos = "..."
  
      /**
       * Cortamos el string desde la posición 0 hasta la posición 'num'. Concatenamos al final de este resultado el string contenido en la variable 'puntos'
       */
      return str.slice(0, num)+ puntos;
    }
    /**No es necesario un 'else', porque si hemos llegado a este punto del código, es porque no se a ejecutado el return de la línea 16 */

    return str;
  }
  
//   function truncateString(str, num) {
//     /**
//      * Si 'num' es mayor que la longitud del stirng, no hace falta hacer nada, porque nos vamos a quedar con todo el string
//      */
//     if (num>=str.length) {
//         return str
//     }
//     let newStr = ""

//     /**
//      * Vamos concatenando en newStr todo el string hasta llegar a la posición 'num'
//      */
//     for(let i=0;i<str.length;i++) {
//         newStr += str[i]
//     }

//     return newStr

//   }

let resultado = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(resultado)