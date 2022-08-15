const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function addTurn(obj, key, val) {
  obj[key] = val;
  return obj
}

function objKeys(obj) {
  return Object.keys(obj);
}

function objLength(obj) {
  const objKey = Object.keys(obj);
  return objKey.length;
}

function objValues(obj) {
  return Object.values(obj);
}

function allStudents(obj) {
 const lesson1Students = obj.lesson1.numeroEstudantes;
 const lesson2Students = obj.lesson2.numeroEstudantes;
 const lesson3Students = obj.lesson3.numeroEstudantes;
 return lesson1Students + lesson2Students + lesson3Students
}

function getValue(obj, number) {
  const keyArray = Object.keys(obj);
  const realKey = keyArray[number];
  return obj[realKey];
}

function verifyContent(obj, string1, string2) {
  const array = Object.entries(obj);
  let result = false;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index][0] === string1 && array[index][1] === string2) {
      result = true
    }
  }
  return result;
}

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

/* console.log('lesson2:');
console.log(addTurn(lesson2, 'turno', 'noite'));
console.log('\n Object keys:')
console.log(objKeys(lesson1));
console.log('\n Object length')
console.log(objLength(lesson1));
console.log('\n Object values');
console.log(objValues(lesson1));
console.log(allLessons)
console.log(allStudents(allLessons));
console.log(getValue(allLessons.lesson1, 2))
 */

console.log(verifyContent(lesson3, 'turno', 'noite'));