import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { Grid, CircularProgress } from '@material-ui/core';
import ToDoItem  from './ToDoItem/ToDoItem';

const ToDoList = ({ setSelectedCardId }) => {
  const todos = useSelector((state) => state.todos);
  const classes = useStyles();

  return (
      !todos.length ? 
        <CircularProgress/>
      : (
        <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
          {
            //iterate all the todo items and cater ToDo cards
            todos.map((todo, i) => (
              <Grid key={i} item xs={12} sm={6} md={6}>
                  {/* {console.log(todo)} */}
                  <ToDoItem todo={todo} setSelectedCardId={setSelectedCardId}/>
              </Grid>
            ))
          }
        </Grid>
      )
  )
}

export default ToDoList