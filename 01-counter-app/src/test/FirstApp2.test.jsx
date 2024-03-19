/** * @jest-environment jsdom */

import { getByTestId, render, screen } from "@testing-library/react"
import { FirstApp } from "../FirstApp"


describe('Puebas en FirstApp2', () => {
    
    const title = 'Hola soy goku';

    test('Snapshot', () => { 
      
      const { container } = render(<FirstApp title={ title}/>);
      expect( container ).toMatchSnapshot();
     });

    test('Debe mostrar "Hola soy goku"', () => { 
      
      render(<FirstApp title={ title} /> );
      
      // screen.debug();

      expect( screen.getByText(title) ).toBeTruthy();
    });

    test('Debe mostrar el titulo en un h1', () => { 
      
      render(<FirstApp title={ title} /> );

      expect( screen.getByRole('heading', { level: 1}).innerHTML ).toContain( title );
     });

    test('debe de mostrar el subtitulo enviado por props', () => {
        
      render( 
          <FirstApp 
              title={ title }
              subTitle={ subTitle }
          />  
      );

      expect( screen.getAllByText(subTitle).length ).toBe(2);

    });
    
})

