const fetch = require('node-fetch');

const apiResponse = () => {
  const url = 'https://api.coincap.io/v2/markets';

  fetch(url)
    .then((resp) => resp.json())
    .then((json) => console.log(json.data.filter(((obj) => obj.baseId === 'bitcoin'))))
    .catch((error) => console.log(`Algo deu errado! erro: ${error}`));
}

apiResponse();