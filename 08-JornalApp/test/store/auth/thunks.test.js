import { singWithGoogle } from '../../../src/firebase/providers';
import { checkingCredential, login, logout } from '../../../src/store/auth/authSlice';
import { checkingAuthentication, startGoogleSignIn } from '../../../src/store/auth/thunks';
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
 })