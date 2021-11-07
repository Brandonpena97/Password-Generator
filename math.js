var uppercaseLetters=["A","B","C","D","E","F","G","H","I","J","I"];
//                     0   1   2   3   4   5 ....          9

var randomNum= Math.random()*uppercaseLetters.length // ---> 7.6333325  ///  12.13123

console.log(randomNum)

var wholeNum = Math.floor(randomNum) // ---> 7   /// 12



console.log(uppercaseLetters[wholeNum])