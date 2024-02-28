import PropTypes from 'prop-types';
import { useState } from 'react'


export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( 0 );

    const handleAdd = () => {

        // setCounter( counter + 1 );
        // c adquiere el valor anterior y se puede utilizar si no se conoce, por ejemplo el counter
        // es lo mismo que el primer setCounter
        setCounter( (c) => c + 1 );

    }

    const handleLess = () => {
        setCounter( (c) => c -1 );
    }

    const resetCounter = () => {
        setCounter( 0 );
    }


    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleLess }> -1 </button>
            <button onClick={ resetCounter }> Reset </button>
        </>
    )
}

CounterApp.protoType = {
    h2: PropTypes.number
}