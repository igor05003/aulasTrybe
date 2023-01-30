var readline = require('readline-sync');
const calculateBmi = () => {
  const weight = readline.question('Qual o seu peso?');
  const height = readline.question('Qual a sua altura?');
  const bmi = (weight / (height ** 2))
  console.log('Seu IMC é %s', bmi);
};

calculateBmi();