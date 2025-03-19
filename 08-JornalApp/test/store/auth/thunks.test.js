import { loginWithEmailPassword, logoutFirebase, singWithGoogle } from '../../../src/firebase/providers';
import { checkingCredential, login, logout } from '../../../src/store/auth/authSlice';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from '../../../src/store/auth/thunks';
import { clearNotesLogout } from '../../../src/store/journal/journalSlice';
import { demoUser } from '../../fixture/authFixture';

jest.mock( '../../../src/firebase/providers' );

describe('Pruebas en thunks', () => { 
    
    const dispatch = jest.fn();
    beforeEach( () => jest.clearAllMocks() );


    test('should invocar el checkingCredentials', async() => { 
        
        await checkingAuthentication()( dispatch );
        expect( dispatch ).toHaveBeenCalledWith( checkingCredential() );
         
    });

    test('startGoogleSignIn debe llamar checkingCredential y login - exito', async() => { 
        
        const loginData = { ok: true, ...demoUser };
        await singWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredential() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
    });
    
    test('startGoogleSignIn debe llamar checkingCredential y login - Error', async() => { 
        
        const loginData = { ok: false, errorMessage: 'Un error en Goole' };
        await singWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredential() );
        expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) );
    });

    test('startLoginWithEmailPassword debe llamar checkingCredential y login - exito', async() => { 
        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456' };

        await loginWithEmailPassword.mockResolvedValue( loginData );
        
        await startLoginWithEmailPassword( formData )( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredential() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
    });


    test('startLogout debe llamar logoutFirebase, clearNotes y logout', async() => { 
        
        await startLogout()(dispatch);

        expect( logoutFirebase ).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
        expect( dispatch ).toHaveBeenCalledWith( logout() );
    });
 })