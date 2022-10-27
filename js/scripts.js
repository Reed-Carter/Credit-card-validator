//Business Logic

function luhnsAlgorithm(number) {
  let numArray = number.split("");
  let newArray = [];
  const editedArray = numArray.map (function(removeBlanks)) {
    if (numArray[i] === " ") {
      numArray[i].();
    }
  }

  for (let i = numArray.length - 1; i >= 0; i -= 1) {
    newArray.push(numArray[i] * 2)
    newArray.reverse();
  }
  //doubledArray = numberArray.map(function (element) {
  // return element * 2;
  }//)
  return newArray;


let array = [0, 1, 2, 3, 4, 5]
let newArray = [];
for (let i = array.length - 1; i >= 0; i -= 1) {
  newArray.push(array[i] * 2)
  newArray.reverse();
}

// function luhnsAlgo(number) {
//   let nums = number.split("");
//   for (let i = nums.length - 1; i >= 0; i -= 1) {
//     let num = parseInt(nums[i]);
//     if (num % 2 === 1) {
//       num *= 2;
//       if (num > 9) {
//         num -= 9;
//       }
//     }
//     nums[i] = num;
//   }
//   let sum = nums.reduce();
//   if(sum % 10 === 0){
//     return true;
//   }
//   else {
//     return false;
//   }
// }