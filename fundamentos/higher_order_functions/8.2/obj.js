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
  
function author1947() {
  const authorObj = books.find((array) => array.author.birthYear === 1947);
  return authorObj.author.name;
}

console.log('Exercicio 1:');
console.log(author1947());

function smallerBookName(array) {
  let result;
  array.forEach((book) => {
    if (!result || book.name.length < result.length) result = book.name;    
  })
  return result;
}
console.log('Exercicio 2:');
console.log(smallerBookName(books));

function bookCarac(array) {
  const book = array.find((obj) => obj.name.length === 26);
  return book.name;
}

console.log('Exercicio 3:');
console.log(bookCarac(books));

console.log('Exercicio 4:')
function sortArray(array) {
  return array.sort((obj1, obj2) => obj2.releaseYear - obj1.releaseYear);
}
console.log(sortArray(books));

console.log('Exercicio 5:')
function birth(array) {
  const result = array.every((obj) => (obj.author.birthYear > 1900 && obj.author.birthYear < 2001));
  return result;
}
console.log(birth(books))

console.log('Exercicio 6:')
function bookDate(array) {
  const result2 = array.some((obj) => (obj.releaseYear > 1980 && obj.releaseYear < 1989));
  return result2;
}
console.log(bookDate(books));
console.log('Exercicio 7:')
function unique(array) {
  return array.every((book1) => 
    !array.some((book2) => 
      (book2.birthYear === book1.birthYear) && (book2.author.name !== book1.author.name)));
}

console.log(unique(books));
