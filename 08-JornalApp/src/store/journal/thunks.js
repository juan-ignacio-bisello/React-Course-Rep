import { FirebaseBD } from "../../firebase/config";
import { addNewEmptyNote } from "./journalSlice";
import { collection, doc, setDoc } from 'firebase/firestore/lite';

export  const startNewNote = () => {
    return async ( dispatch, getState ) => {
        
        const { uid } =  getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseBD, `${ uid }/journal/note` ) );
        const setDocResp = await setDoc( newDoc, newNote );

        // dispatch( addNewEmptyNote() );
    }
}