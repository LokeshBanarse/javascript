 function stringHandsOn()
 {
    var string = "   Hey you are doing good, keep it up    ";
    console.log(string)

    var length = string.length
    console.log("Length is :",length);

    console.log("--------------------------------------------");

    var trim = string.trim()
    console.log(trim);
    console.log("Remove Extra  Space & Length is :",trim.length);

    console.log("--------------------------------------------");

    var line = "hey | you| are | doing | good | keep | it | up";
    var assign = line.split("|");
    console.log(assign);
    
  }
  stringHandsOn();
  

  