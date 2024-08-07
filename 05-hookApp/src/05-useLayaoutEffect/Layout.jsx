import React from 'react';
import { useCounter, useFetch } from '../hooks';
import { LoadinMenssage } from '../03-examples/LoadinMenssage';
import { PokemonCard } from '../03-examples/PokemonCard';

export const Layout = () => {

  const { counter, decrement, increment } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);


  return (
    <>
        <h1>Informacion del pokemon</h1>
        <hr />

        { 
            isLoading 
            ? <LoadinMenssage /> 
            : <PokemonCard 
                id={ counter } 
                name={ data.name } 
                sprites={ [ data.sprites.front_default, data.sprites.front_shiny, data.sprites.back_default, data.sprites.back_shiny,  ] } 
            /> 
        }
        
        <h2>{ data?.name }</h2>

        <button className='btn btn-primary mt-2' onClick={ () => counter > 1 ? decrement() : null }>
          Anteriores
        </button>

        <button className='btn btn-primary mt-2' onClick={ () => increment() }>
          Siguiente
        </button>
    </>
  )
}
