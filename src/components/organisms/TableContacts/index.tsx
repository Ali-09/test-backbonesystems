import { IconButton, LinearProgress, Box, TableContainer, Button, Paper, Grid, TableBody, TableRow, TableCell, Pagination, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import { IResultContacts } from "@/src/models/contact";
import { InputSearch } from "@/src/components";
import { StyledTable, StyledTableHead } from "./styled";

export type TableContactsProps = {
    data: IResultContacts,
    onChangePage: (page: number) => void
    search: string,
    handleSetSearch: (search: string) => void
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    onGoContactsNew: () => void 
    onGoContactEdit: (id:string) => void 
}

const TableContacts = ({ onGoContactsNew, onGoContactEdit, data, onChangePage, handleSetSearch, search, loading }: TableContactsProps) => {
    const { results, totalPages } = data
    const onDisabled = () => {
        if(loading === 'pending') return {pointerEvents: "none", opacity: 0.2}
        return {}
    }
    return (
        <Grid item xs={12}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container alignItems="center">
                        <Grid item xs={12} md={4}>
                            <InputSearch placeholder="Busqueda por correo" setValue={handleSetSearch} value={search}/>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Grid container justifyContent="flex-end">
                                <Button variant="contained" startIcon={<PersonIcon />} onClick={onGoContactsNew}>
                                    Nuevo contacto
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {
                    results && results.length > 0 ? (
                        <>
                            <Grid item xs={12}>
                                <TableContainer component={Paper}>
                                    {
                                        loading === "pending" && <LinearProgress/>
                                    }
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
                                            {data.results.map((item) => (
                                                <TableRow key={item.id} sx={onDisabled}>
                                                    <TableCell>{item.firstName}</TableCell>
                                                    <TableCell>{item.lastName}</TableCell>
                                                    <TableCell>{item.email}</TableCell>
                                                    <TableCell align="center">{item.phone}</TableCell>
                                                    <TableCell align="center">
                                                        <IconButton aria-label="delete" color="primary" onClick={() => onGoContactEdit(item.id)}>
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
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" justifyContent="center">
                                    <Pagination count={totalPages} onChange={(_, page) => onChangePage(page)} variant="text" color="primary" />
                                </Box>
                            </Grid>
                        </>
                    )
                    :
                    (   
                        <Grid item xs={12}>
                            <Typography variant="h5" textAlign="center">No se encontraron registros</Typography>
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    )
}

export default TableContacts