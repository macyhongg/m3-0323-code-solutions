export default function PokemonList({ array }) {
  const pokemon = array.map(x => <li key={x.number}>{x.name}</li>);
  return <ul>{pokemon}</ul>
}
