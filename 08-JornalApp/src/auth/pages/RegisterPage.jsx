import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { StartCreatedUserWithEmailPassword } from '../../store/auth/thunks';


const formData = {
  email: 'juanignaciobisello@hotmail.com',
  password: '123456',
  displayName: 'Juan Ignacio Bisello'
}

const formValidations = {
  email: [ ( value ) => value.includes('@'), 'debe tener un @' ],
  password: [ ( value ) => value.length >= 6, 'minimo 6 caracteres' ],
  displayName: [ ( value ) => value.length >= 1, 'obligatorio' ],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState( false );

  const { displayName, email, password, onInputChange, formState, isFormValid, emailValid, passwordValid, displayNameValid } = useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();

    setFormSubmitted( true );

    if ( !isFormValid ) return;

    dispatch( StartCreatedUserWithEmailPassword( formState ) );
  }

  return (
    <AuthLayout title='Registro'>
      <form>
            <Grid container spacing={2}>

              <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                  label="Nombre completo" 
                  type="text" 
                  placeholder='Tu nombre' 
                  fullWidth
                  name='displayName'
                  value={ displayName }
                  onChange={ onInputChange }
                  error={ !!displayNameValid && formSubmitted }
                  helperText={ displayNameValid }
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                  label="Correo" 
                  type="email" 
                  placeholder='correo@google.com' 
                  fullWidth
                  name='email'
                  value={ email }
                  onChange={ onInputChange }
                  error={ !!emailValid && formSubmitted }
                  helperText={ emailValid }
                  
                />
              </Grid>
    
         <Grid item xs={ 12 } sx={{ mt: 2 }}>
        <TextField 
          label="Contraseña" 
          type="password" 
          placeholder='Contraseña' 
          fullWidth
          name='password'
          value={ password }
          error={ !!passwordValid && formSubmitted }
          helperText={ passwordValid }
          onChange={ onInputChange }
        />
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

          <Grid item xs={12} sm={6} >
            <Button 
              type='submit'
              variant='contained' 
              fullWidth
              onClick={ onSubmit }
            >
              Crear cuenta
            </Button>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='end'>
          <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
          <Link component={ RouterLink } color='inherit' to="/auth/login">
            Ingresar
          </Link>
        </Grid>

        </Grid>


        </Grid>
      </form>
    </AuthLayout>
    
  )
}