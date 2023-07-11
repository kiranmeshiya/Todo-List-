import { Box, Button, Container, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import Header from './Header'
 
function Addtask() {
    return (
        <div className='animated'>
            <Header/>
            <Container>
                <Box sx={{ paddingTop: 10 }}>
                    <Grid container>
                        <Grid item xs={12} md={7} component={Paper}
                            elevation={10}
                            square margin='auto' sx={{borderRadius: "10px", padding: "20px 30px"}}>
                                <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center' ,alignItems: "center"}}>
                                <Typography variant="h4" sx={{ mt: 1, fontWeight:'bold' }}> Add Task</Typography>
                            <Box sx={{display:'flex'}}>
                            <Box component="form" xs={{ mt: 5 }} >
                                <TextField
                                        margin='normal'
                                        id="outlined-select-currency"
                                        select
                                        label="User"
                                        defaultValue="EUR"
                                        helperText="Please select user"
                                        required
                                     sx={{marginRight:'20px'}}
                                    >
                                    
                                        <MenuItem value="Kiran" >Kiran</MenuItem>
                                        <MenuItem value="Komal">Komal</MenuItem>
                                        <MenuItem value="Disha" >Disha</MenuItem>
                                        <MenuItem value="Nisha">Nisha</MenuItem>
                                    </TextField>
                                    <TextField
                                        margin="normal"
                                        autoComplete="Task"
                                        required
                                        id='task'
                                        label="task"
                                        name="task"
                                        autoFocus
                                        sx={{marginRight:'20px' , width:'350px'}}
                                    ></TextField>
                                      <Button variant="contained" type="submit"   margin="normal" sx={{ mt: 2, mb: 2 , padding:'15px 25px'}}>Add</Button>
                                </Box>
                            </Box>
                                </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default Addtask
