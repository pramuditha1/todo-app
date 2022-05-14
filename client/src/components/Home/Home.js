import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

import ToDoList from '../TodoList/ToDoList';

import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../actions/todo_actions';
import Form from '../Form/Form';

export const Home = () => {
    // maintain selectedCardId to load selected card details in the form
    const [selectedCardId, setSelectedCardId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getTodos())
    }, [selectedCardId, dispatch])

    return(
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <ToDoList setSelectedCardId={setSelectedCardId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form selectedCardId={selectedCardId} setSelectedCardId={setSelectedCardId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}