import { Grid, Typography } from '@mui/material';
import { FormContact } from '@/src/components';
import type { FormContactProps } from '@/src/components';

type NewContactProps = {
  formContactProps: FormContactProps
};

function NewContact({ formContactProps }: NewContactProps) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Nuevo contacto</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormContact {...formContactProps} />
      </Grid>
    </Grid>
  );
}

export default NewContact;
