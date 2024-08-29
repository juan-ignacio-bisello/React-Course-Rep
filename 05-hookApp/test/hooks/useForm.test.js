import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en el useForm', () => { 

    const initialForm = {
        name: 'Fernando',
        email: 'fernando@google.com'
    }


    test('debe de regresar los valores por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm)  );
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
        });

    });
 });