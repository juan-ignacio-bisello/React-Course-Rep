const { configureStore } = require("@reduxjs/toolkit")
const { authSlice } = require("../../src/store")
const { initialState, notAuthenticatedState } = require("../fixtures/authStates")
const { renderHook, act, waitFor } = require("@testing-library/react")
const { useAuthStore } = require("../../src/hooks/useAuthStore")
const { Provider } = require("react-redux")
const { testUserCredentials } = require("../fixtures/testUser")
const { default: calendarApi } = require("../../src/api/calendarApi")
const { data } = require("@remix-run/router")


const getMockStore = ( inicialState ) => {
    return configureStore({
        reducer: {
            auth: authSlice.reducer,
        },
        preloadedState: {
            auth: { ...inicialState }
        }
    })
}


describe('Pruebas en useAuthStore', () => { 

    beforeEach( () => localStorage.clear() );

    
    test('should regresar los valores por defevto', () => { 
        
        const mockStore = getMockStore({ ...initialState });

        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
        });

        expect( result.current ).toEqual({
            status: 'checking',
            user: {},
            errorMessage: undefined,
            checkAuthToken: expect.any( Function ),        
            startLogin: expect.any( Function ),
            startRegister: expect.any( Function ),
            startLogout: expect.any( Function ),
        });
    });

    test('should realizar el login correctamente', async() => { 

        const mockStore = getMockStore({ ...notAuthenticatedState });
        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
        });

        await act( async() => {
            await result.current.startLogin( testUserCredentials );
        });

        const { errorMessage,status, user } = result.current;
        expect({ errorMessage,status, user }).toEqual({
            errorMessage: undefined,
            status: "authenticated",
            user: { name: 'Test User', uid: '67fd841ba5be5e5fbba42d6b',
           },
        });

        expect( localStorage.getItem('token') ).toEqual( expect.any( String ) );
        expect( localStorage.getItem('token-init-date') ).toEqual( expect.any( String ) );
    });

    test('should fallar la utenticacion', async() => { 
        
        const mockStore = getMockStore({ ...notAuthenticatedState });
        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
        });

        await act( async() => {
            await result.current.startLogin({ email: 'testFalla@hotmail.com', password: '654321'});
        });

        const { errorMessage, status, user } = result.current;

        expect( localStorage.getItem('token')).toBe(null);
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: "Credenciales incorrectas",
            status: "not-authenticated",
            user: {}
        });


        await waitFor(
            () => expect( result.current.errorMessage ).toBe( undefined )
        );

    });

    test('should registrar un nuevo usuario', async() => { 
        
        const newUSer = { email: 'testNuevoUsuario@hotmail.com', password: '654321', name: 'Test user2' };
        const mockStore = getMockStore({ ...notAuthenticatedState });
        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
        });

        const spy = jest.spyOn( calendarApi, 'post' ).mockReturnValue({
            data: {
                ok: true,
                uid: 'algun id',
                name: 'Test user2',
                token: 'algun token'
            }
        });

        await act( async() => {
            await result.current.startRegister( newUSer );
        });

        const { errorMessage, status, user } = result.current;
        
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'Test user2', uid: 'algun id' }
        });

        spy.mockRestore();

    });

    test('should fallar el creacion de usuario', async() => { 
        
        const mockStore = getMockStore({ ...notAuthenticatedState });
        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
        });


        await act( async() => {
            await result.current.startRegister( testUserCredentials );
        });

        const { errorMessage, status, user } = result.current;
        
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: "Ya existe ese email",
            status: "not-authenticated",
            user: {},
        });

    });

    test('should fallar si no hay un token', async() => { 
        
        const mockStore = getMockStore({ ...initialState });
        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
        });


        await act( async() => {
            await result.current.checkAuthToken();
        });

        const { errorMessage, status, user } = result.current;
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: "not-authenticated",
            user: {},
        });

    });

    test('should auntenticar si hay un token', async() => { 
    
        const { data } = await calendarApi.post('/auth', testUserCredentials );
        localStorage.setItem('token', data.token );
        const mockStore = getMockStore({ ...initialState });
        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
        });


        await act( async() => {
            await result.current.checkAuthToken();
        });

        const { errorMessage, status, user } = result.current;
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'Test User', uid: '67fd841ba5be5e5fbba42d6b' }
        });
    });
})