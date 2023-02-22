import {
  Grid, TextField, Button, Alert,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { FieldErrors, UseFormRegister, UseFormHandleSubmit } from 'react-hook-form';
import { ContactRules } from '@/src/models/contactRules';
import EditIcon from '@mui/icons-material/Edit';

export type NewContactData = {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  [key: string]: string;
};

export type FormContactProps = {
  handleSubmit: UseFormHandleSubmit<NewContactData>,
  register: UseFormRegister<NewContactData>,
  error: string,
  errors: FieldErrors,
  onGoListPage: () => void,
  loading: string,
  onAddContact: (data: NewContactData) => void,
  validateRules: ContactRules,
  message: string
  isEdit?: boolean
};

function FormContact({
  isEdit, message, handleSubmit,
  onAddContact, register, error,
  errors, loading, onGoListPage,
  validateRules,
}: FormContactProps) {
  const onSubmit = handleSubmit((data: NewContactData) => onAddContact(data));

  return (
    <form onSubmit={onSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <TextField
            {...register('firstName', validateRules.firstName)}
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
            label="Nombre:"
            variant="filled"
            error={!!errors.firstName}
            helperText={errors.firstName && `${errors.firstName.message}`}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            {...register('lastName', validateRules.lastName)}
            size="small"
            label="Apellidos:"
            variant="filled"
            error={!!errors.lastName}
            helperText={errors.lastName && `${errors.lastName.message}`}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            {...register('email', validateRules.email)}
            size="small"
            type="email"
            label="Correo:"
            variant="filled"
            error={!!errors.email}
            helperText={errors.email && `${errors.email.message}`}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            {...register('phone', validateRules.phone)}
            size="small"
            type="number"
            label="Telefono:"
            variant="filled"
            error={!!errors.phone}
            helperText={errors.phone && `${errors.phone.message}`}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button disabled={loading === 'pending'} type="submit" variant="contained" endIcon={isEdit ? <EditIcon /> : <AddCircleIcon />} fullWidth>
            {isEdit ? 'Modificar contacto' : 'Crear contacto'}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={onGoListPage} variant="contained" color="error" fullWidth>
            Cancelar
          </Button>
        </Grid>
        {
                    error && (
                    <Grid item xs={12}>
                      <Alert icon={<CloseIcon fontSize="inherit" />} severity="error">
                        {error.charAt(0).toUpperCase() + error.slice(1)}
                      </Alert>
                    </Grid>
                    )
                }
        {
                    message && (
                    <Grid item xs={12}>
                      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                        {message}
                      </Alert>
                    </Grid>
                    )
                }
      </Grid>
    </form>
  );
}

FormContact.defaultProps = {
  isEdit: false,
};

export default FormContact;
