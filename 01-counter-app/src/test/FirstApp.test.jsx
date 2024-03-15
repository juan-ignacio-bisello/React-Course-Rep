/** * @jest-environment jsdom */

import { getByTestId, render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"


describe('Puebas en FirstApp', () => {

    // test('Debe hacer mach con el snapshot', () => { 
        
    //     const title = 'Hola, soy goku.';
    //     const { container } = render( <FirstApp title={ title } /> );

    //     expect( container ).toMatchSnapshot();
    //  })

     test('Debe mopstrar el titulo en un h1', () => { 
        
        const title = 'Hola soy goku';
        const { container, getByTestId, getByText } = render( <FirstApp title={ title } /> );

        expect( getByText( title ) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toContain( title );

        expect( getByTestId('test-title').innerHTML ).toContain(title)
      })

      test('Debe mostrar el SUBtitulo ENVIADO POR props', () => {

        const title = 'Holaaa';
        const subtitle = 'subtitulo';
        const { getAllByText } = render(
          <FirstApp 
            title={title}
            subTitle={subtitle}
          />
        );

        expect( getAllByText(subtitle).length ).toBe( 1 );

      })
})

