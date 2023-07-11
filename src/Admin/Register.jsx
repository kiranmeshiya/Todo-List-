import { Box, Container, Grid, Paper, Button, TextField, Typography, Avatar, MenuItem } from '@mui/material'
import React from 'react'
import logoImg from '../logo.png'
import { Link } from 'react-router-dom'
import './admin.css'
import Header from './Header'
function Register() {
    return (
    
        <div className='animated'>
            <Header/>
            <Container >
                <Box sx={{ paddingTop: 3, marginBottom: 3, }}>
                    <Grid container>
                        <Grid item xs={12} md={5} component={Paper}
                            elevation={10}
                            square margin="auto" sx={{ borderRadius: "10px", padding: " 0 40px 12px" }}>
                            <Box sx={{ mt: 3, display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <Avatar alt="" src={`${logoImg}`} sx={{ width: 50, height: 50 }} />
                                <Typography variant="h6" sx={{ mt: 1 }}> Registration</Typography>
                                <Box component="form" xs={{ mt: 5 }}
                                // onsubmit={handleSubmit}
                                >
                                    <TextField
                                        margin="normal"
                                        autoComplete="Username"
                                        fullWidth
                                        required
                                        id='username'
                                        label="username"
                                        name="username"
                                        autoFocus
                                        size="small"
                                    ></TextField>
                                    <TextField
                                        margin="normal"

                                        autoComplete="email"
                                        fullWidth
                                        required
                                        id='email'
                                        label="Email Address"
                                        name="email"
                                        autoFocus
                                        size="small"
                                        type='email'
                                    ></TextField>

                                    <TextField
                                        margin="normal"
                                        autoComplete="current-password"
                                        fullWidth
                                        required
                                        id='password'
                                        label="password"
                                        name="password"
                                        autoFocus
                                        size="small"
                                        type='password'
                                    ></TextField>
                                    <TextField
                                        margin="normal"
                                        autoComplete="Contact Number"
                                        fullWidth
                                        required
                                        id='phone'
                                        label="Contact Number"
                                        name="phone"
                                        autoFocus
                                        size="small"
                                    ></TextField>
                                    <TextField
                                        margin='normal'
                                        size='small'
                                        id="outlined-select-currency"
                                        select
                                        label="Post"
                                        defaultValue="EUR"
                                        helperText="Please select your Post"
                                        required
                                    >

                                        <MenuItem>Admin</MenuItem>
                                        <MenuItem>User</MenuItem>

                                    </TextField>
                                    <Button variant="contained" type="submit" fullWidth sx={{ mt: 1, mb: 2 }}>Add User</Button>
                                    <Grid container>
                                        <Grid item>
                                            <Link to="/" variant="h6">
                                                {"Sign In"}
                                            </Link>
                                        </Grid>
                                    </Grid>

                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default Register
