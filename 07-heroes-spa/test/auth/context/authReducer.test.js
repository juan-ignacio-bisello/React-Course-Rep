import { authReducer, types } from "../../../src/auth/context";


describe('Pruebas en authReducer', () => { 
    test('should retornar el estado por defecto', () => { 
        const newState = authReducer( { logged: false }, {} );
        expect( newState ).toEqual( { logged: false } );
    });

    test('should llamar el login autenticar y establecer el user', () => { 

        const action = {
            type: types.login,
            payload: {
                name: 'Fernando',
                id: '123'
            }
        }

        const state = authReducer( { logged: false }, action );
        expect( state ).toEqual({
            logged: true,
            user: action.payload
        });
    });
    
    test('should borrar el name del usuario  y logger en false', () => { 
        const state = {
            logged: true,
            user: { id: '123', name: 'Juan' }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer( state, action );

        expect( newState ).toEqual({ logged: false });
     })
 })