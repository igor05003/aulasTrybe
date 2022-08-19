const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const studentRating = (right, stu) => {
  let result = 0;
  for (let index = 0; index < right.length; index += 1) {
    if (stu[index] === right[index]) result += 1;
    if (stu[index] !== right[index] && stu[index] !== 'N.A') result -= 0.5;
  }
  return result;
}

function exam(gab, ans, func) {
    const rating = func(gab, ans)
    return `Nota: ${rating}`;
}
