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





