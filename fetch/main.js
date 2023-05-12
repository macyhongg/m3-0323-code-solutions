async function ThrowPokeball() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/151');
  if (!response.ok) {
    throw new Error('Something went wrong! Server status code: ' + response.status);
  } else {
    const jsonData = await response.json();
    return console.log(jsonData);
  }
}

ThrowPokeball();
