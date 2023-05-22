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


