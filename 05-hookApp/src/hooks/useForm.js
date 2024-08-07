import React, { useState } from 'react'

export const useForm = ( initialForm = {} ) => {
    
    const [ formState, setFormState ] = useState({ initialForm });

    const onInputChanche = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm )
    }
    
    return {
        ...formState,
        formState,
        onInputChanche,
        onResetForm,
    }
}
