function squareOfWordLength(word) {
  var wordLength = word.length;
 console.log(`Word length ${ word} is: ${wordLength}`);

  var wordsquare = wordLength*wordLength;
  console.log( `Square of the ${ word} is ${wordsquare}`); 
}

squareOfWordLength( "JavaScript");
squareOfWordLength( "Google Crome ");
squareOfWordLength( "Developer Smart");

console.log("---------------------------------------------------------");

function  stringLength() {
  var mystring = "I am Angular Developer";
  var mystringLength = mystring.length;
  console.log(`${mystring}`);
  console.log(`Length is ${mystringLength}`);

  var stringWords = mystring.split(" ")
  console.log(stringWords );
}
stringLength();


console.log("---------------------------------------------------------");
function  stringass( ){
    var stringName = "I am Angular Developer";
    var stringNameLength = stringName.length;
    console.log(`Given string length is ${ stringNameLength }` );

    var stringWords = stringName.split(" ")
    console.log(stringWords );
    var p=stringWords.length
     console.log(p );
   var div = stringNameLength / p;
   console.log(`String Length And divid by total number words available in string is ${div}`);
    var multiplication = stringNameLength * p;
   console.log(`String Length And Multiply by total number words available in string is ${multiplication }`);
}
stringass ( );

