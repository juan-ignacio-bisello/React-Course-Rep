import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {
    const [ counter, setUseCounter] = useState( initialValue );

    const increment = ( value = 1 ) => {
        setUseCounter( (current) => current + value );
    }

    const decrement = ( value = 1 ) => {
        if ( counter < 1 ) return;
        setUseCounter( (current) => current - value );
    }

    const reset = () => {
        setUseCounter( initialValue );
    }


    return{
        counter,
        increment,
        decrement,
        reset,
    }
}