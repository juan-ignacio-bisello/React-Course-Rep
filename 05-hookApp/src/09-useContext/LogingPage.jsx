import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LogingPage = () => {

  const { user, setUser } = useContext( UserContext );


  return (
    <>
        <h1>LogingPage</h1>
        <hr />

        <pre aria-label="pre">
          { JSON.stringify( user, null, 3 ) }
        </pre>

        <button
          className='btn btn-primary'
          onClick={ () => setUser({ id: 123, name: 'ignacio bisello', email: 'ignacio@hotmail.com' })}
        >
          Establecer usuario
        </button>
    </>
  )
}
