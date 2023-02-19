import { Grid, Container } from "@mui/material"
import { TableContacts } from "@/src/components"
import { Main } from "@/src/components"
import type { TableContactsProps } from "@/src/components"

type HomeProps = {
    tableContactsProps: TableContactsProps
}

const Home = ({tableContactsProps}: HomeProps) => {
    return (
        <Main>
            <Container>
                <Grid container alignContent='center' spacing={2}>
                    <TableContacts {...tableContactsProps}/>
                </Grid>
            </Container>
        </Main>
    );
}

export default Home;