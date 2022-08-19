const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
       elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);

  let oddsAndEvens = [13, 3, 4, 10, 7, 2];
  const sortOddsAndEvens = () => {
    oddsAndEvens.sort((a,b) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        }
        return 0;
    });
    console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
};

console.log(sortOddsAndEvens())

const fatorial = number => {
  let fatorialNumber = number;
  for (let index = (number - 1); index > 0; index -= 1) {
    fatorialNumber *= index;
  }
  console.log(fatorialNumber);
}

fatorial(5);

