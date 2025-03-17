import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { ImageGalery } from "../components";
import { useForm } from "../../hooks/useForm";
import { setActiveNote } from "../../store/journal/journalSlice";
import { StartSaveNote } from "../../store/journal/thunks";

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active:note, savedMessage, isSaving } = useSelector( state => state.journal );

    const { body, title, onInputChange, formState, date } = useForm( note );

    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [ date ] )

    useEffect(() => {
      dispatch( setActiveNote( formState ) );
    
    }, [ formState ])

    const onSaveNote = () => {
        dispatch( StartSaveNote() );
    }
    
    useEffect(() => {
      if ( savedMessage.length > 0 ) {
        Swal.fire('Nota actualizada', savedMessage, 'success');
      }    
    }, [ savedMessage ])
    

  return (
    <Grid 
        className="animate__animated animate__fadeIn animate__faster"
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={{ mb: 1 }}>


        <Grid item >
            <Typography fontSize={ 39 } fontWeight='light' >{ dateString }</Typography>
        </Grid>
        <Grid>
            <Button 
                disabled={ isSaving }
                onClick={ onSaveNote }
                color="primary" sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1}} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="Titulo"
                sx={{ border: 'none', mb: 1 }}
                name="title"
                value={ title }
                onChange={ onInputChange }
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="Qué sucedio hoy?"
                minRows={ 5 }
                name="body"
                value={ body }
                onChange={ onInputChange }
            />
        </Grid>
        
        <ImageGalery />


    </Grid>

    
  )
}
