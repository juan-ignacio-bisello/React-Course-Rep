import { Google } from '@mui/icons-material';
import { Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
 
export const RegisterPage = () => {
  return (
    <AuthLayout title='Registro'>
      <form>
            <Grid container spacing={2}>

              <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                  label="Correo" 
                  type="email" 
                  placeholder='correo@google.com' 
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                  label="Nombre completo" 
                  type="text" 
                  placeholder='Tu nombre' 
                  fullWidth
                />
              </Grid>
    
         <Grid item xs={ 12 } sx={{ mt: 2 }}>
        <TextField 
          label="Contraseña" 
          type="password" 
          placeholder='Contraseña' 
          fullWidth
        />
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

          <Grid item xs={12} sm={6} >
            <Button 
              variant='contained' 
              fullWidth
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