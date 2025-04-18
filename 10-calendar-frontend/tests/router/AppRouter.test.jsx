const { render, screen, getByAltText } = require("@testing-library/react");
const { AppRouter } = require("../../src/router/AppRouter");
const { useAuthStore } = require("../../src/hooks");
const { MemoryRouter } = require("react-router-dom");
const { CalendarPage } = require("../../src/calendar");


jest.mock('../../src/hooks/useAuthStore');

jest.mock('../../src/calendar', () => ({
    CalendarPage: () => <h1>CalendarPage</h1>
}))

describe('Pruebas en AppRouter', () => { 

    const mockCheckAuthToken = jest.fn();

    beforeEach(() => jest.clearAllMocks() );


    test('debe de mostrar la pantalla de carga y llamar checkAuthToken', () => {

        useAuthStore.mockReturnValue({
            status: 'checking',
            checkAuthToken: mockCheckAuthToken
        });

        render( <AppRouter /> )
        expect( screen.getByText('Cargando...') ).toBeTruthy();
        expect( mockCheckAuthToken ).toHaveBeenCalled();

    });

    test('should mostrar el login en caso de no estar autenticado', () => { 
        
        useAuthStore.mockReturnValue({
            status: 'not-authenticated',
            checkAuthToken: mockCheckAuthToken
        });

        const { container } = render(
            <MemoryRouter>
                <AppRouter />
            </MemoryRouter>
        );

        expect( screen.getByText('Ingreso') ).toBeTruthy();
        expect( container ).toMatchSnapshot();

    });

    test('should mostrar mostrar el calendario si estamos autenticados', () => { 
        
        useAuthStore.mockReturnValue({
            status: 'authenticated',
            checkAuthToken: mockCheckAuthToken
        });

        render(
            <MemoryRouter>
                <AppRouter />
            </MemoryRouter>
        );

        
        expect( screen.getByText('CalendarPage') ).toBeTruthy();

    });
 })