import { useState, useEffect } from 'react'
import Logo from './assets/logo.png'
import './App.css'

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=180')
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <>
      <img src={Logo} className="logo"/>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon, index) => {
          const id = index + 1;
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <div className="pokemon-card" key={id}>
              <img src={imageUrl} alt={pokemon.name} />
              <p>{pokemon.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App
