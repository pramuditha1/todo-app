import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

export const Navbar = () => {
    const classes = useStyles();

    const user = null;

    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography component={Link} to="/" className={classes.heading} variant="h3" align="center">
                Todo App
            </Typography>
            <Toolbar className={classes.toolbar}>
                {
                    user ? (
                        <div className={classes.profile}>
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            <Button variant='contained' color="secondary">Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant='contained' color="primary">Sign In</Button>
                    )
                }
            </Toolbar>
        </AppBar>
    )
 }