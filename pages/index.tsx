import Head from 'next/head'
import { Grid, Button, Typography } from '@mui/material'

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Backbone</title>
      </Head>
      <main>
        <Grid container direction='column' alignContent='center'>
            <Typography variant="h4">Test Backbone</Typography>
            <Button variant='contained'>Start</Button>
        </Grid>
      </main>
    </>
  )
}
