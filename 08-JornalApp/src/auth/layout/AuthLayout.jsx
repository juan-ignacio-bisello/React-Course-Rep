import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid 
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ height: '100vh', backgroundColor: 'primary.main', padding: 4 }}
             >
            
        <Grid item
            xs={3}sm={6}md={4}
            sx={{ backgroundColor:'white' , padding:3,borderRadius:2}}
               >
              
          <Typography variant='h5' sx={{ mb: 1 }}>{ title }</Typography>

          { children }

        </Grid>
    </Grid>
  )
}
