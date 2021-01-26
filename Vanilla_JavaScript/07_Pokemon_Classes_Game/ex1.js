// Construye la clase Pokemon
// https://pokemondb.net/pokedex/all

/**
 * Un pokemon tiene las siguientes características:
 * 
 * - Un identificador único
 * - Un nombre
 * - Tipo de pokemon (fuego, agua, etc). ¡Puede ser más de un tipo!
 * - Vida máxima
 * - Poder de ataque
 * - Poder de defensa
 * 
 * Define el constructor de esta clase.
 */

class Pokemon {
    /**
    * 
    * @param {number} identificador 
    * @param {string} nombre  
    * @param {Array} tipo 
    * @param {number} vida 
    * @param {number} ataque 
    * @param {number} defensa 
    */
   constructor(identificador,nombre,tipo,vida,ataque,defensa) {

       this.identificador=identificador
       this.nombre=nombre
       this.tipo=tipo
       this.vida=vida
       this.ataque=ataque
       this.ataque=defensa
   }

}
// TEST----
let pokemon = new Pokemon(890, "Eternatus", ['Poison', 'Dragon'], 255, 115, 250)
console.log(pokemon)
