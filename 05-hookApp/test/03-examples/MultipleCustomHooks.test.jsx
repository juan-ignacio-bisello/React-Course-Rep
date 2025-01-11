import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas MultipleCustomHooks', () => { 

    const mockIncrement = jest.fn();
        
        useCounter.mockReturnValue({
            counter:1,
            increment: mockIncrement
        });

    befdoreEach(() => {
        jest.clearAllMocks();
    });
    
    test('should mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        
        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Cargando') );
        expect( screen.getByText('Informacion del pokemon') );

        const nextButton = screen.getByRole('button', {name: 'Siguiente'});

        expect( nextButton.disable ).toBeFalsy();

        screen.debug()
     });

     test('should mostrar un Quote', () => { 

        useFetch.mockReturnValue({
            data: [{author: 'Fernando', quote: 'Hola Mundo'}],
            loading: true,
            error: null
        });
        
        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Hola Mundo') ).tobeTruthy();
        expect( screen.getByText('Fernando') ).tobeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Siguiente'});
        expect( nextButton.disable ).toBeFalsy();
     });

     test('Debe llamar la funcion de incrementar', () => {


        useFetch.mockReturnValue({
            data: [{author: 'Fernando', quote: 'Hola Mundo'}],
            loading: true,
            error: null
        });
        
        render( <MultipleCustomHooks /> );

        const nextButton = screen.getByRole('button', {name: 'Siguiente'});
        fireEvent.click(nextButton);

        expect( mockIncrement ).toHaveBeenCalled();
     });

 })