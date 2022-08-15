const obj = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

function newKey(obj, chave, value) {
  const key = chave;
  const val = value;
  obj[key] = val;
  
  return obj;
}

console.log(newKey(obj, 'lastName', 'Costa'));