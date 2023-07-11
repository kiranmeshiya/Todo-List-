import React from 'react'
import '../Admin/adminback.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Grid } from '@mui/material';
import Headeruser from './Headeruser';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(username, calories, fat, carbs, protein) {
  return {username, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function Declinetask() {
  return (

        <div className='animated'>
      <Headeruser/>
      <Box sx={{mt:10}}>
        <Grid container>
        <Grid item xs={12} md={6} component={Paper} sx={{margin:'auto'}}>
        <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell sx={{fontSize:'17px'}}>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right"  sx={{fontSize:'17px'}}>Calories</StyledTableCell>
            <StyledTableCell align="right" sx={{fontSize:'17px'}}>Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right" sx={{fontSize:'17px'}}>Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right" sx={{fontSize:'17px'}}>Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.usernamename}>
              <StyledTableCell component="th" scope="row"  sx={{fontSize:'16px'}}>
                {row.username}
              </StyledTableCell>
              <StyledTableCell align="right" sx={{fontSize:'16px'}}>{row.calories}</StyledTableCell>
              <StyledTableCell align="right" sx={{fontSize:'16px'}}>{row.fat}</StyledTableCell>
              <StyledTableCell align="right" sx={{fontSize:'16px'}}>{row.carbs}</StyledTableCell>
              <StyledTableCell align="right" sx={{fontSize:'16px'}}>{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
        </Grid>
      </Box>
    </div>
   
  )
}

export default Declinetask
