import React, { useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

import ToDoList from '../TodoList/ToDoList';

import { useDispatch } from 'react-redux';
import { getTodos } from '../../actions/todo_actions';
import { Form } from '../Form/Form';

export const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getTodos())
    }, [dispatch])

    return(
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <ToDoList/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}