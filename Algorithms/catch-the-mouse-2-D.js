function catMouse(map, moves) {
    // romper el string literal usando como el separador '\n'
    let rows = map.split("\n");
    console.log("Array", rows)
  
    // findIndex: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/findIndex
  
    let rowCat = rows.findIndex((element) => {
      // string includes: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/includes
      return element.includes("C");
    });
  
    let rowMouse = rows.findIndex((element) => {
      return element.includes("m");
    });
    
      console.log('rowCat:', rowCat)
      console.log('rowMouse:', rowMouse)
  
    
    if (rowCat==-1 ||rowMouse==-1) {
      return "boring without two animals"
    }
  
    // Distancia entre el gato y el ratón a nivel  de filas
    let rowDistance =  (Math.abs(rowCat-rowMouse))
  
    // Distancia entre gato y el raton entre columnas
    let columnDistance = Math.abs(rows[rowCat].indexOf('C') - rows[rowMouse].indexOf('m'))
    
    console.log('rowDistance:', rowDistance)
    console.log('columDistance:', columnDistance)
  
    if (rowDistance + columnDistance > moves) {
        return "Escaped!"
    } 
  
    return "Caught!"
    
  
  }
  
  map = `.........
  .........
  ..C.m....`;
  
  let res = catMouse(map, 5);
  console.log(res);
  