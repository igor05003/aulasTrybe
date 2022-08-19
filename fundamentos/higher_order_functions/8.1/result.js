const result = (n, cN) => {
  if (n === cN) return 'Parabéns você ganhou';
  return 'Tente novamente, você perdeu';
}



function giveaway(n, func) {
  const choseedNumber = parseInt(Math.random() * 5);
  return func(n, choseedNumber);
}
