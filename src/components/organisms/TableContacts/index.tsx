import { IconButton, TableContainer, Paper, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IContact from "@/src/models/contact"
import { StyledTable, StyledTableHead } from "./styled";

type HomeProps = {
    data: Array<IContact>
}

const TableContacts = ({data}:HomeProps) => {
  return (
    <TableContainer component={Paper}>
        <StyledTable aria-label="simple table">
            <StyledTableHead>
                <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Apellidos</TableCell>
                    <TableCell>Correo</TableCell>
                    <TableCell align="center">Telefono</TableCell>
                    <TableCell align="center">Acciones</TableCell>
                </TableRow>
            </StyledTableHead>
            <TableBody>
            {data.map((item) => (
                <TableRow key={item.id}>
                    <TableCell>{item.firstName}</TableCell>
                    <TableCell>{item.lastName}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell align="center">{item.phone}</TableCell>
                    <TableCell align="center">
                        <IconButton aria-label="delete" color="primary">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="edit" color="error">
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </StyledTable>
    </TableContainer>
  )
}

export default TableContacts