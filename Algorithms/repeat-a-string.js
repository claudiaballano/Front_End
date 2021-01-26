function repeatStringNumTimes(str, num) {
  let newStr = ""

  for (let i = 0; i < num; i++) {
    newStr = newStr + str
  }

  return newStr;
}

/**
 * Solución función recursiva!
 * 
 *  if (num<=0) {
   return ""
 }
 
 return str + repeatStringNumTimes(str, num-1)  
 */

console.assert(repeatStringNumTimes("*", 3) == '***', `repeatStringNumTimes("*", 3) should return "***"`)
console.assert(repeatStringNumTimes("abc", 1) == 'abc', `repeatStringNumTimes("abc", 1) should return "abc"`)
console.assert(repeatStringNumTimes("abc", -2) == '', `repeatStringNumTimes("abc", -2) should return ""`)