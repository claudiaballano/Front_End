/**
 * 
 * Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". 
 */
function titleCase(str) {
  let strCapitalized = ''
  let previousLetter = ''

  for (let i = 0; i < str.length; i++) {

    if (previousLetter == ' ' || previousLetter == '') {
      strCapitalized += str[i].toUpperCase()
    }

    else {
      strCapitalized += str[i].toLowerCase()
    }

    previousLetter = str[i]
  }

  return strCapitalized;
}

/**
 * Sin codificar nada, ¿Cómo resolveríamos este algoritmo?
 * 
 * 1. Estado inicial de nuestra solución.
 * 2. Qué tenemos que hacer a cada paso
 * 3. Cómo sabemos que hemos acabado de realizar la transformación del string
 * 4. Atención! Fijaos que todas las letras deben estar en mínusculas, excepto la primera de cada palabra, que debe ser una mayúscula.
 */

/**
 * Solución: Alba/Silvia/Sergi
 * 
 *   Convertir todo el string inicial  a mínusculas 
 Poner cada palabra en un string separado. Utilizaríamos el espacio como separador
 Después seleccionar el primer caracter de cada string
 Convertir el primer caracter de cada palabra a mayúsculas
 Devolver el string modificado
 Montar el string final
 */

// function titleCase(str) {
//   let strCapitalized = ''
//   listWords = str.split(" ");
//   for(let i = 0; i< listWords.length; i++){
//     word = listWords[i];
//     var temp = word[0].toUpperCase() + word.slice(1).toLowerCase();
//     strCapitalized = (strCapitalized == '' ? temp : strCapitalized + " " + temp);
//   }

//   return strCapitalized;
// }

 /**
  * Solución Óscar:
  * 
  * Recorremos el string del inicio al final. Si la letra anterior es un carácter vacio, o bien estamos al inicio de frase, debemos poner el carácter actual en mayúsculas
  */

console.assert("string" == typeof (titleCase("I'm a little tea pot")), `should return a string`)
console.assert("I'm A Little Tea Pot" == titleCase("I'm a little tea pot"), `titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.`)
console.assert(titleCase("sHoRt AnD sToUt") == "Short And Stout", `titleCase("sHoRt AnD sToUt") should return Short And Stout.`)
console.assert(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") == "Here Is My Handle Here Is My Spout", `titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout`)