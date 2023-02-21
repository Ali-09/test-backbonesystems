import { Grid } from '@mui/material';
import { TableContacts } from '@/src/components';
import type { TableContactsProps } from '@/src/components';

type HomeProps = {
  tableContactsProps: TableContactsProps
};

function Home({ tableContactsProps }: HomeProps) {
  return (
    <Grid container alignContent="center" spacing={2}>
      <TableContacts {...tableContactsProps} />
    </Grid>
  );
}

export default Home;
