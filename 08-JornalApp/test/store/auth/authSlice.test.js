import { authSlice } from "../../../src/store/auth/authSlice"
import { initialState } from "../../fixture/authFixture";


describe('Pruebas en authSlice', () => { 
    
    test('should regresar el estado incicial y llamarse "auth"', () => { 
        
        const state = authSlice.reducer( initialState, {} );
        
        expect( authSlice.name ).toBe( 'auth' );
        expect( state ).toEqual( initialState );
     })
 })