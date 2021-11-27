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

