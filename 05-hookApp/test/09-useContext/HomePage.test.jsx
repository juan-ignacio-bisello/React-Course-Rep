import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext";


describe('Pruebas en HomePage', () => { 
    

    test('should mostrat el componente sin el usuario', () => { 
        
        render( 
            <UserContext.Provider value={{ user: null }}>
            <HomePage />
            /</UserContext.Provider> );
        
        
        const preTag = screen.getByLabelText('preTag');
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${ user.id }` );

     });
 });