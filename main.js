function solution(roman) {
  //defines the data type of the value of our variable as a number allowing us to perform basic arithmetic on it to updated later
  //defines an array called decimal containing all of our possible numbers in this case
  //defines another array called romanSym that contains all of our roman numerals
  //iterates our number array
  //utilizes a nested for loop to check our passed in roman numeral for its first character
  //since our numerals match up with our numbers in array index
  //we can add the corresponding number to our result variable  by selecting it via its respective index
  //we then remove then remove the matching numeral from the start of our passed in string via the replace method
  // returns our result number
  var result = 0;
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanSym = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=decimal.length;i++) {
    while (roman.indexOf(romanSym[i]) === 0){
      result += decimal[i];
      roman = roman.replace(romanSym[i],'');
    }
  }
  return result;
}
