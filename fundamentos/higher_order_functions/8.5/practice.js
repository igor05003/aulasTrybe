console.log('Exercício 1;');
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)); 
});

console.log('Exercício 2:');
const sum = (...numbers) => numbers.reduce((acc, curr) => acc += curr, 0)

console.log(sum(4,5,6));

console.log('Exercício 3:');
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex));
console.log(personLikes(gunnar));

console.log('Exercício 4:');

const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
];

const filterPeople = (array) => array.filter(({ nationality, bornIn}) => nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000);

console.log(filterPeople(people));

console.log('Exercício 5:');
const myList = [5, 2, 3];
const [n1, n2, n3] = myList;

const swap = (array) => array = [n3, n2, n1];

console.log(swap(myList));

console.log('Exercício 6:')
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObj = ([carName, brand, year]) => ({carName, brand, year});
console.log(toObj(palio));

console.log('Exercício 7:');
const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
];

const shipLength = ({ name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`;

  
console.log(shipLength(ships[0]));
console.log(shipLength(ships[1]));
console.log(shipLength(ships[2]));

console.log('Exercício 8');
const greet = (name, text = 'Hi') => `${text} ${name}`;

console.log(greet('John'));
console.log(greet('John', 'Good morning'));
console.log(greet('Isabela', 'Oi'));

console.log('Exercício 9:');
// yearSeasons: estações do ano.
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const { spring, summer, autumn, winter } = yearSeasons;
const yearMonths = [...winter, ...spring, ...summer, ...autumn]
console.log(yearMonths)