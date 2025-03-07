import { registerUserWithEmailPassword, singWithGoogle } from "../../firebase/providers";
import { checkingCredential, login, logout } from "./authSlice"


export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredential() );
    }
}


export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredential() );

        const result = await singWithGoogle();

        if ( !result.ok ) return dispatch( logout( result.errorMessage) );
        
        dispatch( login( result ) );
    }
}


export const StartCreatedUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredential() );

        const result = await registerUserWithEmailPassword({ email, password, displayName });
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ))

    }

}