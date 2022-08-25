const specialFruit = ['Banana', 'Morango', 'Maçã'];
const addItens = ['Leite-condensado', 'Abacaxi'];

const fruitSalad = (fruit, add) => {
  const fruitSalad = [...fruit, ...add];
  return fruitSalad;   
}

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
}

const maria = {
  ...user,
  ...jobInfos,
}

const { name, age, nationality, profession, squad, squadInitials } = maria;

/* console.log(`Hi, my name is ${name}, I'm ${age} and im ${nationality}, I work as a ${profession} and my squad is ${squadInitials}-${squad}`); */

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [greet, func] = saudacoes;
func(greet);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
const [n1, n2, n3, n4, n5, n6, n7] = numerosPares
numerosPares = [n4, n5, n6, n7];

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.81, -43.95))

const multiply = (number, value = 1) => number * value;

console.log(multiply(8));