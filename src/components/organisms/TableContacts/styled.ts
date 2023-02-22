import styled from 'styled-components';
import { Table, TableHead } from '@mui/material';

export const StyledTable = styled(Table)`
    min-width: 650;
`;

export const StyledTableHead = styled(TableHead)`
    background: #171717;
    th{
        color: white;
    }
`;
