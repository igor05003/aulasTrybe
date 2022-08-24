const arrays = [['1', '2', '3'], [true], [4, 5, 6]];
console.log('Exercício 1:')
function flatten(array) {
  return array.reduce((count, current) => {
    return `${count}, ${current}`
  })
}

console.log(flatten(arrays));

console.log('Exercício 2:')

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
];

function nameString(array) {
  return array.reduce((acc, curr) => {
    acc += `${curr.author.name}, `;
    return acc;
  }, '')
}

console.log(nameString(books));

console.log('Exercício 3:');
function averageAge(array) {
  const total = array.reduce((acc, curr) => acc += (curr.releaseYear - curr.author.birthYear), 0)
  return (total / array.length);
}
console.log(averageAge(books))

console.log('Exercicio 4:');
function biggerName(array) {
  return array.reduce((acc, curr) => {
    if (curr.name.length > acc.name.length) {
      return curr
    }
    return acc
  })
}

console.log(biggerName(books))

console.log('Exercício 5:');
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function timesA(array) {
  return array.reduce((acc, curr) => {
    return acc + curr.split('').reduce((acc, curr) => {
      if (curr === 'a' || curr === 'A') return acc += 1
      return acc;
    }, 0)}, 0)
}
console.log(timesA(names));

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9,8,10,7,5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

console.log('Exercicio 6:');
function studentAvg(array, grade) {
  return array.map((student, index) => {
    const obj = {
      name: student, 
      average: grade[index].reduce((acc, curr) => acc += curr, 0) / (grade[index].length),
    }
    return obj
  })
}

console.log(studentAvg(students, grades))
