let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1.

for (let index = 0; index < numbers.length; index += 1) {
    console.log(index, "-->", numbers[index]);
}

// 2.

let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
    resultado += numbers[index];
}

console.log("Soma dos índices:", resultado);

// 3.

let mediaAritmetica = 0;

for (let index = 0; index < numbers.length; index += 1) {
    mediaAritmetica += (numbers[index]);
}

mediaAritmetica = mediaAritmetica / (numbers.length)

console.log(mediaAritmetica);

// 4.

if (mediaAritmetica > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

// 5.
let max = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    let value = numbers[index];
    if (value > max) {
        max = value;
    }
}

console.log("O valor máximo é: ", max)

// 6.
let imparVal = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 2) !== 0 ) {
        imparVal += 1;
    } 
}

console.log("O número de valores ímpares é: ", imparVal);

// 7.

let minimum = numbers[0]

for (let index = 0; index < numbers.length; index += 1) {
    let value = numbers[index];
    if (value < minimum) {
        minimum = value;
    }
}

console.log("O valor mínimo é: ", minimum);

// 8.

let array = [];

for (let index = 1; index <= 25; index += 1) {
    array.push(index);
}

console.log(array);

// 9.

for (let index = 0; index < array.length; index += 1) {
    console.log(array[index] / 2);
}
