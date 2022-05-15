import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from '../Auth/LogoutButton';
import LoginButton from '../Auth/LoginButton';

export const Navbar = () => {
    const classes = useStyles();

    const { user, isAuthenticated } = useAuth0();

    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography component={Link} to="/" className={classes.heading} variant="h3" align="center">
                Todo App
            </Typography>
            <Toolbar className={classes.toolbar}>
                {
                    isAuthenticated ? (
                        <div className={classes.profile}>
                            <Typography className={classes.userName} variant="h6">{user.name}</Typography>
                            <LogoutButton/>
                        </div>
                    ) : (
                        <LoginButton/>
                    )
                }
            </Toolbar>
        </AppBar>
    )
 }