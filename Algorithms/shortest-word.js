function findShort(s){
    //Cortar/separar por los espacios y luego ordena el array
    let array = s.split(" ").sort((a, b) => a.length - b.length);
    //Devuelve la longitud de la palabra más corta
    //console.log(array[0])
    return array[0].length
  }

let res = findShort("bitcoin take over the world maybe who knows perhaps")
console.log("Result should be 3: ", res)