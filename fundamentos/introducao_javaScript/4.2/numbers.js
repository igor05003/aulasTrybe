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