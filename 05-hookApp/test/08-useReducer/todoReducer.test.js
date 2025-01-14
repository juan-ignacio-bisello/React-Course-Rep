import { todoReducer } from "../../src/08-useReducer/todoReducer";


describe('Pruebas en Reducer', () => { 
    
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }];

    test('should regresar el estado inicial', () => { 
    
        const newState = todoReducer( initialState, {} );

        expect( newState ).toEqual( initialState );
    
    });

    test('should agregar un todo', () => { 
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Demo Todo 2',
                done: false,
            }
        };

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
    });

    test('should eliminar un Todo', () => { 
        
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe( 0 );
    });

    test('should reliazar el cambio del Todo', () => { 
        
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );

        expect( newState[0].done ).toBe( true );
     })
 })