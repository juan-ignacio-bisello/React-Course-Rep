import React from 'react';
import { useFetch } from '../hooks';

export const PokemonCard = ({ id, name, sprites }) => {
  return (
    <section style={{ height: 200 }}>
        
        <h2>#{ id } - { name }</h2>

        <div>
            {
                sprites.map( sprite => (
                    <img key={ sprite } src={ sprite } alt={ sprite } />
                ))
            }
        </div>

    </section>
  )
}
