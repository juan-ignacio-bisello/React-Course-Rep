import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";


describe('Pruebas en MainApp', () => { 
    
    test('should mostrar el HomePage', () => { 
        
            render( 
                <MemoryRouter>
                    <MainApp /> 
                </MemoryRouter>
            );

            expect(screen.getByText('HomePage')).toBeTruthy();
        
     });

     test('should mostrar el LogingPage', () => { 
        
        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp /> 
            </MemoryRouter>
        );
        
        expect(screen.getByText('LogingPage')).toBeTruthy();
    
 });


 })