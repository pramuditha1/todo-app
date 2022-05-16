import React, {useState} from 'react';
import { useSelector } from 'react-redux'; 
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import LogoutButton from '../Auth/LogoutButton';
import LoginButton from '../Auth/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

export const Navbar = () => {
    const classes = useStyles();
    const { user, isAuthenticated } = useAuth0();
    const [userProfile, setUserProfile] = useState(JSON.parse(localStorage.getItem('profile')));
    // const storeAuthData = useSelector((state) => state.auth);
    // console.log('user profile is : ', userProfile.user);
    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography component={Link} to="/" className={classes.heading} variant="h3" align="center">
                Todo App
            </Typography>
            <Toolbar className={classes.toolbar}>
                {
                    (isAuthenticated) ? (
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