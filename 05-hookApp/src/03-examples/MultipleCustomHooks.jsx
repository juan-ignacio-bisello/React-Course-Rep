import React from 'react';
import { useFetch } from '../hooks';

export const MultipleCustomHooks = () => {

    const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/1');


  return (
    <>
        <h1>Informacion del pokemon</h1>
        <hr />

        { isLoading && <p>Cargando...</p> }
        
        <h2>{ data?.name }</h2>
    </>
  )
}
