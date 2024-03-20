import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from '../CounterApp'

describe('Pruebas CounterApp', () => {
    const initialValue = 100;

    test('Debe hacer match con el snapshot', () => { 
        
        const { container } = render( <CounterApp value={100}/> );

        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de 100', () => { 

        render( <CounterApp value={ initialValue } /> );

        expect( screen.getByText(100) ).toBeTruthy();
    
    });

    test('Debe incrementar con el boton +1', () => { 
        
        render( <CounterApp value={ initialValue } />);

        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByText('101')).toBeTruthy()
     });

     test('Debe incrementar con el boton -1', () => { 
        
        render( <CounterApp value={ initialValue } />);

        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByText('99')).toBeTruthy()
     });

     test('Debe probar el boton reset', () => { 
        
        render( <CounterApp value={ initialValue } />);

        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );

        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' } ) );

        expect( screen.getByText('100')).toBeTruthy()
     });
})