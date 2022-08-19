const employeeData = (na, em) => {
  const data = {
    name: na,
    email: em,
  };
  return data;
}


const newEmployees = () => {
  const employees = {
    id1: employeeData('Pedro Guerra', 'pedro@trybe.com'),
    id2: employeeData('Luíza Drumond', 'luiza@trybe.com'),
    id3: employeeData('Carla Paiva', 'carla@trybe.com'), 
  }
  return employees;
}
