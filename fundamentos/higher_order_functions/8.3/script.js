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

console.log('Exercício 1:')
function newArray(array) {
  return array.map((book) => {
    return `${book.name} - ${book.genre} - ${book.author.name}`
  })
}

console.log(newArray(books));

console.log('Exercício 2:');
function ageArray(array) {
  return array.map((obj) => {
    const newObj = {
      age: (obj.releaseYear - obj.author.birthYear),
      author: obj.author.name, 
    }
    return newObj;
  }).sort((obj1, obj2) => obj1.age - obj2.age);
}
console.log(ageArray(books));

console.log('Exercicio 3:');
function genArray(array) {
  return array.filter( (book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
  )
}

console.log(genArray(books));

console.log('Exercicio 4:');
function dateFilter(array) {
  return array.filter((book) => {
    return book.releaseYear < (2022 - 60);
  }).sort((obj1, obj2) => obj1.releaseYear - obj2.releaseYear)
}

console.log(dateFilter(books));

console.log('Exercício 5:');
function nameArray(array) {
  return array.filter((obj) => obj.genre === 'Ficção Científica' || obj.genre === 'Fantasia').map((obj) => obj.author.name);
}

console.log(nameArray(books));

console.log('Exercicio 6:');
function bookNameArray(array) {
  return array.filter((book) => {
    return book.releaseYear < (2022 - 60);
    }).map((obj) => obj.name)
}
console.log(bookNameArray(books));