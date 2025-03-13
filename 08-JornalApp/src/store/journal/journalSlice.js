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
        },
        setNote: ( state, action ) => {
            state.notes = action.payload;
        },
        setSaving: ( state ) => {

        },
        updateNote: ( state, action ) => {

        },
        deleteNoteById: ( state, action ) => {

        },
    }
});


// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNote, setSaving, updateNote, deleteNoteById, savingNewNote } = journalSlice.actions;