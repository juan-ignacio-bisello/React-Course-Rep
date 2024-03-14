/** * @jest-environment jsdom */

import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"


describe('Puebas en FirstApp', () => {
    test('Debe hacer mach con el snapshot', () => { 
        
        const title = 'Hola, soy goku.';
        const { container } = render( <FirstApp title={ title } /> );

        expect( container ).toMatchSnapshot();
     })

     test('Debe mopstrar el titulo en un h1', () => { 
        
        const title = 'Hola soy goku';
        const { container, getByText } = render( <FirstApp title={ title } /> );

        expect( getByText( title ) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect( h1.innerHTML ).toContain( title );
      })
})

