const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  js: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  html: 'bom',
  css: 'ótimo',
  js: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'bom',
};

function listSkills(obj) {
  const skillsArray = Object.keys(obj);
  for (let index = 0; index < skillsArray.length; index += 1) {
    console.log(`${skillsArray[index]}, Nível: ${obj[skillsArray[index]]}`);
  }
}

console.log('Estudante 1');
console.log(listSkills(student1));