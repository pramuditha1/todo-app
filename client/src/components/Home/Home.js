import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

import ToDoList from '../TodoList/ToDoList';

import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../actions/todo_actions';
import Form from '../Form/Form';

import { useAuth0 } from "@auth0/auth0-react";
import { SET_AUTH_DATA } from '../../constants/actionType';

export const Home = () => {
    // maintain selectedCardId to load selected card details in the form
    const [selectedCardId, setSelectedCardId] = useState(null);
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useAuth0();
    const todos = useSelector((state) => state.todos);

    useEffect(() => {
        //set local storage for login details and update store
        console.log('dispatching auth data...')
        try {
            dispatch({ type: SET_AUTH_DATA, data: { user }})
        } catch (error) {
            console.log(error);
        }
        dispatch(getTodos())
    }, [user, selectedCardId, dispatch])

    return(
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <ToDoList setSelectedCardId={setSelectedCardId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {
                            isAuthenticated && <Form selectedCardId={selectedCardId} setSelectedCardId={setSelectedCardId}/>
                        }
                        </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}