const emailListInData = ['roberta@email.com', 'paulo@email.com',
'anaroberta@email.com', 'fabiano@email.com'];
  
const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
  
emailListInData.forEach(showEmailList);

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => (number % 3 === 0 && number % 5 === 0);

numbers.find(findDivisibleBy3And5);

console.log(numbers.find(findDivisibleBy3And5));