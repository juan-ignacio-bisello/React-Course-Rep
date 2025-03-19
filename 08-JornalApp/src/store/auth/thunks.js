import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singWithGoogle } from '../../firebase/providers';
import { loadNotes } from '../../helpers/loadNotes';
import { clearNotesLogout, setNote } from '../journal/journalSlice';
import { checkingCredential, login, logout } from './authSlice';


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

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if ( !ok ) return dispatch( logout({ errorMessage }) );

        dispatch( login({ uid, displayName, email, photoURL }) );

    }

}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredential() );

        const result = await loginWithEmailPassword({ email, password });

        if ( !result.ok ) return dispatch( logout( result ) );
        
        dispatch( login( result ) );
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase();

        dispatch( clearNotesLogout() );

        dispatch( logout({}) );
    }
}

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {
        
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('No se encontro el uid del usuario');

        const notes = await loadNotes( uid );
        dispatch( setNote( notes) );
    }
}