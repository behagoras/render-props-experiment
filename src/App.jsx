import React from 'react';
import styled from 'styled-components';
import GetPokemon from './api/GetPokemons';
import Pokemon from './components/Pokemon';

const MyApp = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

function App() {
  return (
    <MyApp>
      {
        Array.from(Array(10).keys()).map((key) => (
          <GetPokemon
            pokemonNumber={key + 1}
            key={key + 1}
          >
            {
              ({ pokemon = {} }) => (
                <Pokemon
                  src={pokemon.src}
                  pokemonName={pokemon.name}
                  pokemonNumber={pokemon.id}
                  key={key + 1}

                />
              )
            }
          </GetPokemon>
        ))
      }

    </MyApp>
  );
}

export default App;
