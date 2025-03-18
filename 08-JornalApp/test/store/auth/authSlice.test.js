import { authSlice, checkingCredential, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState } from "../../fixture/authFixture";


describe('Pruebas en authSlice', () => { 
    
    test('should regresar el estado incicial y llamarse "auth"', () => { 
        
        const state = authSlice.reducer( initialState, {} );
        
        expect( authSlice.name ).toBe( 'auth' );
        expect( state ).toEqual( initialState );
     });
     
    test('should realizar la autentidicacion', () => { 
        
        const state = authSlice.reducer( initialState, login( demoUser ) );

        expect( state ).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        });

    });

    test('should realizar el logout sin argumentos', () => { 
        
        const state = authSlice.reducer( authenticatedState, logout() );

        expect( state ).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        });
     });

    test('should realizar el logout con argumentos', () => { 

        const errorMessage = 'Credenciales no son correctas';
        
        const state = authSlice.reducer( authenticatedState, logout({ errorMessage }) );
        expect( state ).toEqual({
           status: 'not-authenticated',
           uid: null,
           email: null,
           displayName: null,
           photoURL: null,
           errorMessage: errorMessage,
        });
    });

    test('should cambiar el estado a checking', () => { 
        
        const state = authSlice.reducer( authenticatedState, checkingCredential() );

        expect( state.status ).toBe('checking');
     })
 })