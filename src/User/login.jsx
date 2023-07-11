import React from "react"
import backgroundImage from '../20547283_6310507.jpg';
import logoImg from '../logo.png'
import {
    Avatar, Box, Button, Checkbox, Container, CssBaseline,
    FormControlLabel,
    Grid, Link, Paper, TextField, Typography,
} from '@mui/material'

function Login() {

    return (
        <>
            <Container sx={{ height: '90vh'}}>
            <CssBaseline />
                <Box sx={{ marginTop: 10 , marginBottom:10, height: 'calc(100% - 300px)' }}>
                    <Grid container>
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            component={Paper}
            elevation={10}
           
                            sx={{
                              
                                backgroundImage: `url(${backgroundImage})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize:"cover",
                                backgroundPosition: 'center',
                                borderTopLeftRadius: '20px',
                                borderBottomLeftRadius: '20px',
                            }}
                        ></Grid>
                        <Grid item xs={12} sm={8} md={5}   component={Paper}
            elevation={10}
            square sx={{  borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',}}>
                            <Box sx={{
                                my: 3,
                                mx: 4,
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Avatar alt="" src={`${logoImg}`} sx={{ width: 50, height: 50 }} />
                                <Typography variant="h6" sx={{ mt: 2 }}> Sign In</Typography>
                                <Box component="form" xs={{ mt: 100 }}
                                // onsubmit={handleSubmit}
                                >
                                    <TextField
                                        margin="normal"
                                        autoComplete="email"
                                        fullWidth
                                        required
                                        id='email'
                                        label="Email Address"
                                        name="email"
                                        autoFocus
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
                                    ></TextField>
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"

                                    />
                                    <Button variant="contained" type="submit" fullWidth sx={{ mt: 1, mb: 3 }}>Login</Button>
                                    <Grid container>
                                        <Grid item>
                                            <Link href="#" variant="body2">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Login
