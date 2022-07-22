let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1.

for (let index = 1; index < numbers.length; index += 1) {
    for (let j = 0; j < index; j += 1) {
        if(numbers[index] < numbers[j]) {
            let position = numbers[index];
            numbers[index] = numbers[j];
            numbers[j] = position;
        }
    }
}

console.log(numbers)

// 2.

for (let index = 1; index < numbers.length; index += 1) {
    for (let j = 0; j < index; j += 1) {
        if (numbers[index] > numbers[j]) {
            let position = numbers[index];
            numbers[index] = numbers[j];
            numbers[j] = position;
        }
    }
}

console.log(numbers);

// 3.

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
multNumbers = [];
let j = 0;

for (let index = 1; index < numbers.length; index += 1) {
    if (j < index) {
        multNumbers.push(numbers[j] * numbers[index]);
        j += 1
    } 
}

if (j === numbers.length) {
    multNumbers.push(numbers[j] * 2);
}

console.log("array numbers");
console.log(numbers);
console.log("array numbers multiplicado");
console.log(multNumbers);