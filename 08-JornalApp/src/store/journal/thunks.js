import { FirebaseBD } from "../../firebase/config";
import { fileUpload } from "../../helpers/fileUpload";
import { addNewEmptyNote, setActiveNote, savingNewNote, setSaving, updateNote } from "./journalSlice";
import { collection, doc, setDoc } from 'firebase/firestore/lite';

export  const startNewNote = () => {
    return async ( dispatch, getState ) => {

        dispatch( savingNewNote() );
        
        const { uid } =  getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseBD, `${ uid }/journal/note` ) );
        const setDocResp = await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
    }
}

export const StartSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        const docRef = doc( FirebaseBD, `${ uid }/journal/note/${ note.id }` );
        await setDoc( docRef, noteToFirestore, { merge: true } );

        dispatch( updateNote( note ) );
    }
}

export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSaving() );

        await fileUpload( files[0] );

        
    }
}