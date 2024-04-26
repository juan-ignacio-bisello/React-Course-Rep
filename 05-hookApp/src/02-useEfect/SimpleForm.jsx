import { useEffect, useState } from "react"
import { Message } from "./Message";

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

    useEffect( () => {
        // console.log('useEfect called 1');
    }, []);

    useEffect( () => {
        // console.log('formState called2');
    }, [ formState ]);

    useEffect( () => {
        // console.log('useEfect called3');
    }, [ email ]);

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

            {
                (username === 'strider2' ) && <Message />
            }
            
        </>
    )
}