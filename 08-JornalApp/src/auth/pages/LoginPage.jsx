import { Google } from '@mui/icons-material';
import { Link as RouterLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { useMemo } from 'react';
 

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm( formData );

  const isAuthenticated = useMemo( () => status === 'checking', [ status ] );

  const onSubmit = ( event ) => {
    event.preventDefault();

    console.log({ email, password });

    dispatch( startLoginWithEmailPassword({ email, password }) );
  };

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title='Login'>
      <form 
        onSubmit={ onSubmit } 
        aria-label='submit-form'
        className="animate__animated animate__fadeIn animate__faster">
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                  label="Correo" 
                  type="email" 
                  placeholder='correo@google.com' 
                  fullWidth
                  name='email'
                  value={ email }
                  onChange={ onInputChange}
                />
              </Grid>
    
         <Grid item xs={ 12 } sx={{ mt: 2 }}>
        <TextField 
          label="Contraseña" 
          type="password" 
          placeholder='Contraseña' 
          fullWidth
          name='password'
          inputProps={{
            'data-testid': 'password'
          }}
          value={ password }
          onChange={ onInputChange}
        />

        <Grid container display={ !!errorMessage ? '' : 'none'}>
          <Grid item xs={12} sm={6} >
            <Alert severity='error' sx={{ display: !errorMessage && 'none' }}>
              { errorMessage } 
            </Alert>
          </Grid>
        </Grid>
          

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6} >
            <Button
              disabled={ isAuthenticated }
              type='submit' 
              variant='contained' 
              fullWidth
              onClick={ onSubmit }
            >
              Login
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} >
            <Button 
              disabled={ isAuthenticated }
              onClick={ onGoogleSignIn }
              variant='container' 
              aria-label='google-btn'
              fullWidth >
              <Google />
              <Typography sx={{ ml: 1}}>Google</Typography>
            </Button>
          </Grid>

        </Grid>

        <Grid container direction='row' justifyContent='end'>
          <Link component={ RouterLink } color='inherit' to="/auth/register">
            Crear una cuenta
          </Link>
        </Grid>

        </Grid>


        </Grid>
      </form>
    </AuthLayout>
    
  )
}