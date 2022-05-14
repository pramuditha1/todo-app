import React, {useEffect, useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../../actions/todo_actions';

const Form = () => {
  //initial state and setState hook
  const [todoData, setTodoData] = useState({
    taskName: '',
    taskDescription: '',
    attachment: ''
  })
  // add css
  const classes = useStyles();
  const dispatch = useDispatch();

  //handle submit event - post creation
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(todoData));
    clearForm();
  }

  // clear form elements
  const clearForm = () => {
    setTodoData({
      taskName: '',
      taskDescription: '',
      attachment: ''
    })
  }
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h6">Create New ToDo</Typography>
        <TextField
          name="taskName"
          className={classes.textBox}
          label="Task Name"
          variant="outlined"
          fullWidth value={todoData.taskName}
          onChange={(e) => setTodoData({ ...todoData, taskName: e.target.value })} />
        <TextField
          name="taskDescription"
          variant="outlined"
          className={classes.textBox}
          label="Task Description"
          fullWidth
          value={todoData.taskDescription}
          onChange={(e) => setTodoData({ ...todoData, taskDescription: e.target.value })} />
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false}
          onDone={({ base64 }) => setTodoData({ ...todoData, attachment: base64 })} />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth>
            Add
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={clearForm}
          fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Form