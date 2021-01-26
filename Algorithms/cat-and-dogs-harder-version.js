function catMouse(x, j){

    let cat = x.indexOf('C')
    let mouse = x.indexOf('m')
    let dog = x.indexOf('D')
   
    
    let distanceCatMouse = cat - mouse //Si la resta es negativa, el raton estará a la derecha del gato.
    let distanceCatDog = cat - dog //Si resultado negativo, perro esta a la derecha
  
    
  //Depurar codigo ---- considear si gato tiene raton a derecha o izquierda, y lo mismo para perro con gato
    
    
    //Si falta uno de los animales, es aburrido
    if(dog == -1 || cat == -1 || mouse == -1){
        return 'boring without all three'
    }
    //Si no hay suficientes movimientos para llegar al raton, raton escapa
    if(j < Math.abs(distanceCatMouse)){
      return 'Escaped!'
    }
   
      
      //Si el perro esta en la derecha, y el raton a la izquierda, atrapamos al raton
      if(distanceCatMouse > 0 && distanceCatDog < 0){
        return 'Caught!'
      } else if (distanceCatMouse < 0 && distanceCatDog > 0){ //Si el perro esta en la izquierda y el raton en la derecha, atrapamos al raton
        return 'Caught!'
      } else if((distanceCatDog < 0 && distanceCatMouse < 0) && dog < mouse){//Si los dos estan a la derecha, pero perro en medio, nos bloqwuea
        return 'Protected!'          
      } else if((distanceCatDog > 0 && distanceCatMouse > 0) && dog > mouse){//Si los dos estan a la izquierda, pero perro en medio, nos bloquea
        return 'Protected!'          
      }  
      return 'Caught!'
  }