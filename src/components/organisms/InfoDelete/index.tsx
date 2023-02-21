import { Grid, Typography, Button } from "@mui/material";
import { NewContactData } from "../FormContact";
import DeleteIcon from '@mui/icons-material/Delete';

export type InfoDeleteProps = {
    onDeleteContact: () => void
    contact: NewContactData,
    loading: string
}

const InfoDelete = ({onDeleteContact, contact, loading} : InfoDeleteProps) => {
  return (
    <>
        <Grid item xs={12}>
            <Typography variant="h4">Eliminar contacto</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h6">Se eliminara el contacto:</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="body2"><strong>Nombre:</strong> {contact.firstName}</Typography>
            <Typography variant="body2"><strong>Apellidos:</strong> {contact.lastName}</Typography>
            <Typography variant="body2"><strong>Telefono:</strong> {contact.phone}</Typography>
            <Typography variant="body2"><strong>Correo:</strong> {contact.email}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Button variant="contained" disabled={loading === "pending"} onClick={onDeleteContact} endIcon={<DeleteIcon />} fullWidth>Eliminar</Button>
        </Grid>
    </>
  )
}

export default InfoDelete