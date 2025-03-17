import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        savedMessage: '',
        notes: [],
        active: null,
        // active: {
        //     id: '123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [],
        // },
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
            state.active = action
        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload;
            state.savedMessage = '';
        },
        setNote: ( state, action ) => {
            state.notes = action.payload;
        },
        setSaving: ( state ) => {
            state.isSaving = true;
            state.savedMessage = '';
        },
        updateNote: ( state, action ) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if ( note.id === action.payload.id ) {
                    return action.payload;
                }

                return note;
            } );

            state.savedMessage = `${ action.payload.title }, actualizada correctamente`;
        },
        setPhotosToActiveNote: ( state, action ) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        },
        deleteNoteById: ( state, action ) => {

        },
    }
});


// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNote, setSaving, updateNote, deleteNoteById, savingNewNote, setPhotosToActiveNote } = journalSlice.actions;