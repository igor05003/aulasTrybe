const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((resp) => resp.json())
    .then((json) => console.log(json.value))
}
 
fetchJoke();