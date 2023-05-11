var name1 = "Sweety";
var name2 = "Cutie";

function swapVariables(valueOne, valueTwo) {
  console.log("Before Swap: ", valueOne, valueTwo);
  var temp = valueOne;
  valueOne = valueTwo;
  valueTwo = temp;
  console.log("After Swap: ", valueOne, valueTwo);
}
swapVariables(name1, name2);
 
console.log("\n");

var num1 = 100;
var num2 = 200;
var num3 = 300;

console.log("Before Swap..", "num1: ", num1, " num2: ", num2, "num3:", num3);
temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;
console.log("After Swap..", "num1: ", num1, " num2: ", num2, "num3:", num3);
