console.log("--------------------------------");
console.log("Square of 5 , 6 , 25 , 100 are:");
var square = function (value) {
  console.log(value * value);
};
square(5);
square(6);
square(25);
square(100);

console.log("------------------------------");
// console.log("Type of Square is:"+ typeof square );

// console.log("Type of Square is:", typeof square);
console.log(`Type of Square is:  ${typeof square}`);

console.log("------------------------------");

var areaOfPlot = function (length,width) {
   result = length*width;
   console.log("Area of rectangle =", result);
  };
  areaOfPlot(499, 917);


console.log("------------------------------");
function swapValues(arg1, arg2) {
  console.log("Before swap:", arg1, arg2);
  var temp = arg1;
  arg1 = arg2;
  arg2 = temp;
  console.log("After swap:", arg1, arg2);
}
swapValues("Virat", "Anushka");
console.log("----------");
swapValues(1000, 2000);

console.log("------------------------------");
