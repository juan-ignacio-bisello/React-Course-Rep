import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChanche, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

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
            <h1>Form With Custom Hook</h1>
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

            <input type="password" 
                className="form-control mt-2" 
                placeholder="Contraseña" 
                name="password" 
                value={ password }
                onChange={ onInputChanche }
            />

            
        </>
    )
}