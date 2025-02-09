import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { Navbar } from '../../../src/ui/components/Navbar';
import { AuthContext } from '../../../src/auth/context/AuthContext';


const mockedUseNavigate = jest.fn();

jest.mock( 'react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en Navbar', () => { 

    const contextValue = {
        logged: true,
        user: {
            name: 'Juan'
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() );
    
    test('should mostrar el nombre del usuario loggueado', () => { 

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        expect( screen.getByText('Juan') ).toBeTruthy();
    });

    test('should llamar el logout y navigate cuando se haga click en el boton', () => { 
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith( '/login', {"replace": true} );

        
    });
 })