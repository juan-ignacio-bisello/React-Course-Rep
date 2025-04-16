const { authSlice, onLogin, onLogout, clearErrorMessage, onChecking } = require("../../../src/store/auth/authSlice");
const { initialState, authenticatedState } = require("../../fixtures/authStates");
const { testUserCredentials } = require("../../fixtures/testUser");

describe('Pruebas en authSlice', () => { 
    
    test('should regresar el estado inicial', () => { 
    
        expect( authSlice.getInitialState() ).toEqual( initialState );

    });

    test('should realizar un login', () => { 
        
        const state = authSlice.reducer( initialState, onLogin( testUserCredentials ) );
        expect( state ).toEqual({
            status: 'authenticated',
            user: testUserCredentials,
            errorMessage: undefined,
        });
    });

    test('should realizar el logout', () => { 
        
        const state = authSlice.reducer( authenticatedState, onLogout() );
        expect( state ).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: undefined,
        });
    });

    test('should realizar el logout', () => { 
        const errorMessage = 'Credenciales no validas';
        const state = authSlice.reducer( authenticatedState, onLogout( errorMessage ) );
        expect( state ).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: errorMessage,
        });
    });

    test('should limpiar el errorMessage', () => { 
        
        const errorMessage = 'Credenciales no validas';
        const state = authSlice.reducer( authenticatedState, onLogout( errorMessage ) );
        const newState = authSlice.reducer( state, clearErrorMessage() );

        expect( newState.errorMessage ).toBe( undefined );
    });

    test('should llamar el onChecking', () => { 
        
        const state = authSlice.reducer( initialState, onLogin( testUserCredentials ) );
        const newState = authSlice.reducer( state, onChecking() );

        expect( newState ).toEqual( initialState );
     })
 })