//creamos un array donde guardamos el "worth" de cada raza
const goodWorth = [
    1, // Hobbits
    2, // Men
    3, // Elves
    3, // Dwarves
    4, // Eagles
    10, // Wizards
  ];


  const evilWorth = [
    1, // Orcs
    2, // Men
    2, // Wargs
    2, // Goblins
    3, // Uruk Hai
    5, // Trolls
    10, // Wizards
  ];
  
  //función para calcular worth de cada lado:good y evil
  function calculateWorth(points, worth) {
    // y puntos y worth?
    let warriors = points.split(" ");
    warriors = warriors.map(element => {
        return Number(element)
    })
    //console.log("Warriors enteros: ", warriors);

    // multiplicar el número que hay de cada uno de los guerreros por su "worth" (fuerza)
    let totalPower = 0

    warriors.forEach( (warrior, index) => {
        totalPower += warrior * worth[index]
    })

    console.log(totalPower)
    return totalPower
  }
  
  //función para calcular qué lado gana
  function goodVsEvil(goodCount, evilCount) {
    const goodTotalWorth = calculateWorth(goodCount, goodWorth);
    const evilTotalWorth = calculateWorth(evilCount, evilWorth);
  
    if (evilTotalWorth > goodTotalWorth)
      return "Battle Result: Evil eradicates all trace of Good";
    else if (goodTotalWorth > evilTotalWorth)
      return "Battle Result: Good triumphs over Evil";
    
    return "Battle Result: No victor on this battle field";
  }
