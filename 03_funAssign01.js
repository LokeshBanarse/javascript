function greet() {
    console.log("Good Morning");
  }
function show() 
{
    console.log("Show function with no arguments and no return type ");
}
greet();
show();
console.log("-----------------------------------------------------");

function  personalDetails(firstName,lastName,CollegeName)
{
    console.log("First Name :",firstName);
    console.log("Last Name :",lastName);
    console.log("College Name :",CollegeName);
}
personalDetails("Lokesh","Banarse","DCPE HVPM Amravati");

console.log("-----------------------------------------------------");

function swapValues(arg1, arg2) {
    console.log("Before swap:", arg1,arg2);
    let temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log("After swap:", arg1,arg2);
  }
  swapValues("Virat", "Anushka");
console.log("---------------");
  swapValues(1000, 2000);

 console.log("-----------------------------------------------------");

  function addThreeValues(num1, num2, num3) {
     result = num1 + num2 + num3;
    console.log("Result :", result);
  }
  
  addThreeValues(10.23, 600, 40);
  addThreeValues("Hello", " Good", " Morning");
  