import { Grid, Typography, Button } from "@mui/material";
import { InfoDelete } from "@/src/components";
import type { InfoDeleteProps } from "@/src/components";

type DeleteContactProps = {
    infoDeleteProps: InfoDeleteProps,
    message: string,
    onGoListPage: () => void
}

const DeleteContact = ({ message, onGoListPage, infoDeleteProps}: DeleteContactProps) => {
    return (
        <Grid container spacing={1}>
            {
                message ? (
                    <Grid item xs={12}>
                        <Typography variant="h4">{message}</Typography>
                    </Grid>
                ) : <InfoDelete {...infoDeleteProps}/>
            }
            <Grid item xs={12}>
                <Button color="error" onClick={onGoListPage} variant="contained" fullWidth>Cancelar</Button>
            </Grid>
        </Grid>
    )
}

export default DeleteContact