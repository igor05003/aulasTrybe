let biggerPrime = 0;

for (let index = 2; index <= 100; index += 1) {
    if ((index % 2) != 0) {
        biggerPrime = index;
    }
}

console.log("O maior número primo é: ", biggerPrime);