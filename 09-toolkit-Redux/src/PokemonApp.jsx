import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

  const dispatch = useDispatch();

  const { isLoading, pokemon, page } = useSelector( state => state.pokemons );
  
  useEffect(() => {
    
    dispatch( getPokemons() );
  
  }, [])
  
  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <span>Loading: { isLoading ? 'True' : 'False' }</span>

        <ul>
          { pokemon.map( ({ name }) => (
            <li key={ name }>{ name }</li>
          )) }
        </ul>

        <button
          disabled={ isLoading }  
          onClick={ () => dispatch( getPokemons( page ) )}
        >
          Next
        </button>
    </>
    

  )
}
