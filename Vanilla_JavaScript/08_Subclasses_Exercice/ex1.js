
/**
 * 1) Crea una clase Personaje.
 * Dicha clase tiene las siguientes características (vamos a simplificarlo)
 * 
 *  - Nombre
 *  - Raza
 *  - Puntos de vida
 *  - Características (INSTANCIA DE CLASE)
 * 
 *  Además todos los personajes cuando empiezan sus aventuras tienen 0 puntos de experiencia. Guarda también este dato
 */

 /* 
 * "Características" es una variable de tipo Caracteristica, que se compone de :
      - Fuerza
      - Agilidad
      - Resistencia
      - Inteligencia
 */


 class Personaje {
     constructor(nombre, raza, vida, caracteristicas) {
          this.nombre = nombre
          this.raza = raza
          this.vida = vida,
          this.caracteristicas = caracteristicas
          this.experiencia = 0
     }
 }

let caracteristicas = {
     fuerza: 12,
     agilidad: 15,
     resistencia: 9,
     inteligencia: 17
}
let personaje = new Personaje('Arod', 'Elfo', 150, caracteristicas)
console.log(personaje)

 