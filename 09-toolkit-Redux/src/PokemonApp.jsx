import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch( getPokemons() );
  
  }, [])
  
  return (
    <>
        <h1>PokemonApp</h1>
        <hr />

        <ul>
            <li>hola</li>
            <li>chau</li>
            <li>jajaj</li>
        </ul>
    </>
    

  )
}
