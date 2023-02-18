import { Grid, Container, Button } from "@mui/material"
import { TableContacts } from "@/src/components"
import PersonIcon from '@mui/icons-material/Person';
import { Main } from "@/src/components"
import IContact from "@/src/models/contact"

type HomeProps = {
    data: Array<IContact>
}

const Home = ({data}: HomeProps) => {
    return (
        <Main>
            <Container>
                <Grid container alignContent='center' spacing={2}>
                    <Grid item xs={12}>
                            <Grid container justifyContent="flex-end">
                            <Button variant="text" startIcon={<PersonIcon />}>
                                Agregar contacto
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <TableContacts data={data}/>
                    </Grid>
                </Grid>
            </Container>
        </Main>
    );
}

export default Home;