import { collection, doc, getDocs } from "firebase/firestore/lite";
import { FirebaseBD } from "../firebase/config";


export const loadNotes = async( uid = '' ) => {
    if ( !uid ) throw new Error('uid not exist');

    const collectionRef = collection( FirebaseBD, `${ uid }/journal/note` );
    const docs = await getDocs( collectionRef );

    const notes = [];
    docs.forEach( doc => {
        notes.push({ id: doc.id, ...doc.data() });
    });

    return notes;
}