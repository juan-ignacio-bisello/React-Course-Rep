import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'exem@gamil.com',
    });

    const { email, username } = formState;

    const onInputChanche = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    // useEffect( () => {
    //     console.log('useEfect called');
    // });

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input type="text" 
                className="form-control" 
                placeholder="Username" 
                name="username" 
                value={ username }
                onChange={ onInputChanche }
            />
            

            <input type="text" 
                className="form-control mt-2" 
                placeholder="juanignaciobisello@hotmail.com" 
                name="email" 
                value={ email }
                onChange={ onInputChanche }
            />
            
        </>
    )
}