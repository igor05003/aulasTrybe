// 3.

let array = ["java", "python", "html", "javascript", "css"];
let biggerWord = array[0];

for (let index = 1; index < array.length; index += 1) {
  let value = array[index];
  if (value.length > biggerWord.length) {
    biggerWord = value;
  }
}

console.log("A maior palavra do array é: ", biggerWord);

// 3b.

let smallerWord = array[0];

for (let index = 1; index < array.length; index += 1) {
  let anotherValue = array[index];
  if (anotherValue.length < smallerWord.length) {
    smallerWord = anotherValue;
  }
}

console.log("A menor palavra do array é: ", smallerWord);