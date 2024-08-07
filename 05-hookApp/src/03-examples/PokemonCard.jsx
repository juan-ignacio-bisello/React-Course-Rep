import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../hooks';

export const PokemonCard = ({ id, name, sprites }) => {

  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0 , height: 0 });

  useLayoutEffect(() => {
  
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  
  }, [ PokemonCard ])
  return (
    <>
      <section style={{ height: 200, display: 'flex' }}>

          <h2 ref={ pRef } >#{ id } - { name }</h2>

          <div>
              {
                  sprites.map( sprite => (
                      <img 
                        key={ sprite } 
                        src={ sprite } 
                        alt={ sprite } 
                      />
                  ))
              }
          </div>

      </section>

      <code>{ JSON.stringify( boxSize ) }</code>
    </>
    
  )
}
