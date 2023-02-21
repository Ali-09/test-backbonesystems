import React from 'react';
import { useRouter } from "next/router";
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Page404() {
  
  const router = useRouter();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
        marginTop: "2rem"
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="center" sx={{textAlign:"center"}}>
          <Grid xs={12}>
            <Typography variant="h1" align="center">
              404
            </Typography>
            <Typography variant="h5" align="center">
              La pagina que estas buscando no existe
            </Typography>
            <Button sx={{marginTop: "2rem"}} variant="contained" onClick={() => router.push("/")}>Regresar</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}