function sumAll(arr) {
  let currentResult = 0;

  let num1 = arr[0];
  let num2 = arr[1];

  let largestNumber = num1 > num2 ? num1 : num2;
  let smallestNumber = largestNumber === num1 ? num2 : num1;

  // DEntro de un for, intentad no reaprovechar variables de fuera de él
  // Usar siempre una variable contador propia
  let nextAdd = largestNumber;
  for(largestNumber; largestNumber >= smallestNumber; largestNumber--){
    currentResult = currentResult + nextAdd;
    nextAdd--;
  }
  console.log(currentResult);
  return currentResult;
}
sumAll([1, 4]);

// Utilizando el operador 'spread' y Math.max, Math.min

// function sumAll(arr) {
//     let lowerIndex = Math.min(...arr)
//     let upperIndex = Math.max(...arr)
//     let sum = 0
  
//     for (let i=lowerIndex;i<=upperIndex;i++) {
//       sum+=i
//     }
  
//     return sum
//   }