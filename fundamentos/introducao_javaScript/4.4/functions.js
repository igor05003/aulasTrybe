// 1.

function palindromo(string) {
    string = string.toLowerCase()
    let word = string;
    let reverseWord = word.split("").reverse().join("");
    let result;

    if (word === reverseWord) {
        result = true;
    } else {
        result = false;
    }

    return result;
}

console.log(palindromo("Arara"));

// 2.

let myArray = [1, 5, 3, 6, 8, 2, 0];
let array = [2, 8, 5, 3, 1, 0];

function biggerNumber(array) {
    let biggerIndex = 0;
    let value = [0];

    for (let index = 1; index < array.length; index += 1) {
        if (array[index] > value) {
            biggerIndex = index;
        }
    }
    return biggerIndex;
}

console.log(biggerNumber(myArray));
console.log(biggerNumber(array));