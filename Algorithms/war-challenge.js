
function goodVsEvil(good, evil){

let goodSplit=good.split(" ")
let evilSplit=evil.split(" ")

console.log(goodSplit)
console.log(evilSplit)
  
  //Good side
  let hobbits=1
  let men=2
  let elves=3
  let dwarves=3
  let eagles=4
  let wizards=10
  
  let hobbitsPower=goodSplit[0]*hobbits
  let menPower=goodSplit[1]*men
  let elvesPower=goodSplit[2]*elves
  let dwarvesPower=goodSplit[3]*dwarves
  let eaglesPower=goodSplit[4]*eagles
  let wizardsPower=goodSplit[5]*wizards

  let totalGoodPower=hobbitsPower+menPower+elvesPower+dwarvesPower+eaglesPower+wizardsPower

//Evil side
  let orcs= 1
  let evilMen= 2
  let wargs= 2
  let goblins= 2
  let urukHai= 3
  let trolls= 5
  let evilWizards= 10

  let orcsPower=evilSplit[0]*orcs
  let evilMenPower=evilSplit[1]*evilMen
  let wargsPower=evilSplit[2]*wargs
  let goblinsPower=evilSplit[3]*goblins
  let urukHaiPower=evilSplit[4]*urukHai
  let trollsPower=evilSplit[5]*trolls
  let evilWizardsPower=evilSplit[6]*evilWizards
  
  let totalEvilPower=orcsPower+evilMenPower+wargsPower+goblinsPower+urukHaiPower+trollsPower+evilWizardsPower

console.log(totalGoodPower)
console.log(totalEvilPower)
//Good side vs Evil side
let battleResult=""
if(totalGoodPower>totalEvilPower){
  battleResult='Battle Result: Good triumphs over Evil'
  return battleResult
}
else if(totalEvilPower>totalGoodPower){
  battleResult='Battle Result: Evil eradicates all trace of Good'
  return battleResult
}
else{
  battleResult='Battle Result: No victor on this battle field'
  return battleResult
}
}

goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')