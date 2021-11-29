function isOdd(num){
    return num % 2 === 0;
}

console.log(isOdd(5));
console.log(isOdd(10));

//////////////////////

function isEven(num){
    return num % 2 !== 0;
}

console.log(isEven(6));
console.log(isEven(7));

/////////////////////

function identity(input){
    return input;
}

console.log(identity("Groot"));

/////////////////////

function isFive(num){
    return num === 5;
}

console.log(isFive(5));
console.log(isFive(10));

/////////////////////

function addFive(input){
    return input + 5;
}

console.log(addFive("tree "));
console.log(addFive(5));

//////////////////////

function isMultipleOfFive(num){
    return num % 5 === 0;
}

console.log(isMultipleOfFive(15));
console.log(isMultipleOfFive(22));

////////////////////////

function isThree(num){
    return num === 3;
}

console.log(isThree(3));
console.log(isThree(11));

////////////////////////

function isMultipleOfThree(num){
    return num % 3 === 0;
}

console.log(isMultipleOfThree(27));
console.log(isMultipleOfThree(22));

////////////////////////

function isMultipleOfThreeAndFive(num){
    return (num % 3 === 0) && (num % 5 === 0);
}

console.log(isMultipleOfThreeAndFive(30));
console.log(isMultipleOfThreeAndFive(17));

//////////////////////////////

function isMultipleOf(num, n){
    return num % n === 0;
}

console.log(isMultipleOf(50, 5));
console.log(isMultipleOf(50, 7));

///////////////////////////////

function isTrue(boo){
    return boo === true;
}

console.log(isTrue(true));
console.log(isTrue(false));
console.log(isTrue(""));

////////////////////////////////

function isFalse(boo){
    return boo === false;
}

console.log(isFalse(true));
console.log(isFalse(false));
console.log(isFalse(""));

//////////////////////////////

function isTruthy(input){
    return input == true;
}

console.log(isTruthy(''));
console.log(isTruthy(1));
console.log(isTruthy(0));

//////////////////////////////

function isFalsy(input){
    return input == false;
}

console.log(isFalsy(''));
console.log(isFalsy(0));
console.log(isFalsy(1));

////////////////////////////

function isVowel(letter){
    if (letter.toLowerCase() === ("a" || "e" || "i" || "o" || "u")){
        return "This is a vowel";
    } else return "Not a vowel";
}

console.log(isVowel("A"));
console.log(isVowel("H"));

//////////////////////////////////

function isConsonant(letter) {
    if (letter.toLowerCase() !== ("a" || "e" || "i" || "o" || "u")) {
        return "This is a consonant";
    } else return "Not a consonant";

}

console.log(isConsonant("B"));
console.log(isConsonant("A"));

////////////////////////////////////


function isCapital(letter){
    if (letter === letter.toUpperCase()){
        return "This is a capital letter";
    }else return "Not a capital letter";
}

console.log(isCapital("N"));
console.log(isCapital("n"));

////////////////////////////////

function isLowerCase(letter){
    if (letter === letter.toLowerCase()){
        return "This is a lowercase letter";
    }else return "Not a lowercase letter";
}

console.log(isLowerCase("k"));
console.log(isLowerCase("K"));

/////////////////////////////////

function hasLowerCase(input){
    if (input === input.toUpperCase()){
        return "No lowercase letters";
    }else return "The string has lowercase letters";
}

console.log(hasLowerCase("JOHN"));
console.log(hasLowerCase("John"));

/////////////////////////////////

function isSpace(letter){
    return letter === " ";
}

console.log(isSpace(" "));
console.log(isSpace("N"));

//////////////////////////////////

function isZero(num){
    return num === 0;
}

console.log(isZero(0));
console.log(isZero(2));

///////////////////////////////////

function lowerCase(str){
    return str.toLowerCase();
}

console.log(lowerCase("This IS a StRiNg"));

//////////////////////////////////

function double(num){
    return num * 2;
}

console.log(double(4));

//////////////////////////////////

function triple(num){
    return num * 3;
}

console.log(triple(3));

/////////////////////////

function quadruple(num){
    return num * 4;
}

console.log(quadruple(5));

//////////////////////////

function half(num){
    return num / 2;
}

console.log(half(27));

///////////////////////////////

function subtract(a, b){
    return a - b;
}

console.log(subtract(10, 5));

///////////////////////////////

function multiply(a, b){
    return a * b;
}

console.log(multiply(10, 5));

//////////////////////////////

function divide(a, b){
    return a / b;
}

console.log(divide(10, 2));

////////////////////////////////

function remainder(a, b){
    return a % b;
}

console.log(remainder(5, 2));

////////////////////////////////

function modulo(a, b){
    return a % b;
}

console.log(modulo(11, 3));

/////////////////////////////////

function cube(num){
    return Math.pow(num, 3);
}

console.log(cube(9));
console.log(cube(3));

////////////////////////////////

function squareRoot(num){
    return Math.sqrt(num);
}

console.log(squareRoot(49));

///////////////////////////////

function cubeRoot(num){
    return Math.cbrt(num);
}

console.log(cubeRoot(27));

//////////////////////////////////

function invertSign(num){
    if(!isNaN(num)){
    return parseInt(num) * -1;
        }else return false
}


console.log(invertSign(5));
console.log(invertSign(-10));
console.log(invertSign("Joe"));

/////////////////////////

function degreesToRadians(num){
    return num * (Math.PI / 180);
}

console.log(degreesToRadians(50));

/////////////////////////////////

function radiansToDegrees(num){
    return num * (180 / Math.PI);
}

console.log(radiansToDegrees(.87));

///////////////////////////////////

function isBlank(input){
    return input[0] === " ";
}

console.log(isBlank(" Hello"));
console.log(isBlank("There"));

////////////////////////////////////

function trim(str){
    return str.trim();
}

console.log(trim("   Hello there buddy    "));

/////////////////////////////////////

function areEqual(a, b){
    return a == b;
}

console.log(areEqual(5, 6));
console.log(areEqual(7, 7));

/////////////////////////////////////

function areIdentical(a, b){
    return a === b;
}

console.log(areIdentical(5, "5"));
console.log(areIdentical("7", "7"));

/////////////////////////////////////

function not(input){
    return !input;
}

console.log(not(5));
console.log(not("Joe"));
console.log(not(0));

/////////////////////////////////////

function notNot(input){
    return !!input;
}

/////////////////////////////////

function and(a, b){
    return a && b;
}

console.log(and(5, true));
console.log(and(-1, false));

////////////////////////////////

function or(a, b){
    return a || b;
}
///////////////////////////////

function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello there 007"));

/////////////////////////////////

function absoluteValue(num){
    let abs = Math.abs(num);
    return abs;
}

console.log(absoluteValue(-25));

////////////////////////////////

function rollDice(sides){
    return Math.floor(Math.random() * sides);
}

console.log(rollDice(12));
console.log(rollDice(4));
console.log(rollDice(125));

//////////////////////////////////////

function returnTwo(){
    return 2;
}

console.log(returnTwo());

/////////////////////////////

function howdy(){
    console.log("Howdy!");
}

howdy();

///////////////////////////////

function returnName(){
    return "Nelson";
}

console.log(returnName());

//////////////////////////////////

function addThree(num){
    return num + 3;
}

console.log(addThree(5));

////////////////////////////////

function sayString(input){
    return input
}

console.log(sayString("Codeup"));

////////////////////////////////

function getRandomNumber(min, max){
    return Math.random() * (max - min) + min;
}

console.log(getRandomNumber(5,10));

///////////////////////////////////

function first(str){
    return str.charAt(0);
}

console.log(first("Hello"));

///////////////////////////////////

function last(str){
    return str.charAt(str.length - 1);
}

console.log(last("Hello again!"));

///////////////////////////////////

function rest(str){
    return str.substring(1);
}

console.log(rest("Hello yet again"));

////////////////////////////////////

function reverse(input){
    return input.split("").reverse().join("");
}

console.log(reverse("ti kcus nac namtaB"));

/////////////////////////////////////

function isNumeric(input){
    return isNaN(input);
}

console.log(isNumeric('Hello'));
console.log(isNumeric(5));

////////////////////////////////////

function count(input){
    return input.length;
}

console.log(count("So we meet again"));

////////////////////////////////////

function sumOfSquares(a, b){
    return Math.pow(a, 2) + Math.pow(b, 2);
}

console.log(sumOfSquares(2, 5));

///////////////////////////////////////////

function doMath(operator, a, b){
    let operation = "";
    switch(operator){
        case "+":
            operation =  (a + b);
            break;
        case "-":
            operation = (a - b);
            break;
        case "*":
            operation = (a * b);
            break;
        case "/":
            operation = (a / b);
    } return operation;
}

console.log(doMath("+", 5, 5));

/////////////////////////////////

function countWhiteSpaces(input){
    return input.match(/([\s]+)/g).length;
}

console.log(countWhiteSpaces(" Hello there "));

////////////////////////////////////

function countWhiteSpacesAtBeginningAndEnd(input){
    return (input.length) - input.trim().length;
}

console.log(countWhiteSpacesAtBeginningAndEnd("  There are two at the start, and three   "));

//////////////////////////////////////

function isLastLetterA(str){
    return str.charAt(str.length - 1) === ("a" || "A");
}

console.log(isLastLetterA("It's not"));
console.log(isLastLetterA("It is-a"));

///////////////////////////////////////////////

function whiteSpacesAtLeft(str){
    return (str.length) - (str.trimLeft().length);
}

console.log(whiteSpacesAtLeft("   Three "));
console.log(whiteSpacesAtLeft(" One "));

///////////////////////////////////////////////














