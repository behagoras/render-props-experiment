/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

const GetPokemon = ({ children, pokemonNumber }) => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    window.fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
      .then((res) => res.json())
      .then((myPokemon) => {
        setPokemon({
          src: myPokemon.sprites.front_default,
          name: myPokemon.species.name,
          id: myPokemon.id,
        });
      })
      .catch((error) => { console.error(error); });
  }, []);
  return (
    <div>
      {children(
        { pokemon },
      )}
    </div>
  );
};

export default GetPokemon;
