import React, {useEffect, useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { createTodo, updateTodo } from '../../actions/todo_actions';

const Form = ({ selectedCardId, setSelectedCardId }) => {
    // add css
    const classes = useStyles();
    const dispatch = useDispatch();

    //initial state and setState hook
    const [todoData, setTodoData] = useState({
      taskName: '',
      taskDescription: '',
      attachment: ''
    });

    //when update option in card clicks selectedCardId value get chenged with id value
    const selectedTodoCardData = useSelector((state) => selectedCardId ? state.todos.find(
      (storeTodoItem) => storeTodoItem._id === selectedCardId
    ) : null);
    //load form data upon selectedTodoCardData in update scenario
    useEffect(() => {
      if(selectedTodoCardData) {
          setTodoData(selectedTodoCardData);
      }
    }, [selectedTodoCardData]);

    //handle submit event - post creation
    const handleSubmit = (e) => {
      e.preventDefault();
      if (selectedCardId) {
        dispatch(updateTodo(selectedCardId, todoData));
        clearForm();
      } else {
        dispatch(createTodo(todoData));
        clearForm();
      }
    }

    // clear form elements
    const clearForm = () => {
      setTodoData({
        taskName: '',
        taskDescription: '',
        attachment: ''
      });
      setSelectedCardId(null);
    }

    return (
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h6">{ selectedCardId ? 'Update ' : 'Create New'} Todo</Typography>
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