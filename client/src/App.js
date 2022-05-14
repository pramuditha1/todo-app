import React from 'react'
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';

const App = () => {
    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        ToDo App
                    </Typography>
                    <Button color="inherit">Sign in</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            Task list
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            To do entry form
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </div>
    )
}

export default App