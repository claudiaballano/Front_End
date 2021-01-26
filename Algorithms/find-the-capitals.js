const capital = (x) => x.map(i => `The capital of ${i.state? i.state : i.country} is ${i.capital}`)

/**
 * Solución alternativa usando Object.entries
 * 
 * function capital(capitals){

  return capitals.map(element => {
    return "The capital of " + Object.entries(element)[0][1] + " is " + element.capital   
  })
}
 */

 /**
  * Solución alternativa usando el operador OR ||
  * 
  * function capital(capitals) {
  return capitals.map(function(e) {
    return 'The capital of ' + (e.state || e.country) + ' is ' + e.capital
  })
}
  */
let resultado = capital([{state: 'Maine', capital: 'Augusta'}])
console.log(resultado)