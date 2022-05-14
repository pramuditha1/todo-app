import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import defaultImage from '../../../images/defaultImage.png';

import { deleteTodo } from '../../../actions/todo_actions';

const ToDoItem = ({ todo, setSelectedCardId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {/* load image in a card media component */}
      <CardMedia 
        className={classes.media}
        image={todo.attachment || defaultImage}/>

      {/* shpw the time duration */}
      <div className={classes.moment}>
        <Typography variant="body2">{moment(todo.createdAt).fromNow()}</Typography>
      </div>

      {/* todo item update icon */}
      <div className={classes.updateIcon}>
        <Button 
        style={{ color: 'white' }} size="small" 
        onClick={() => setSelectedCardId(todo._id)}>
          <SettingsIcon fontSize="medium" />
        </Button>
      </div>

      {/* todo details */}
      <Typography className={classes.title} gutterBottom variant="h5">{todo.taskName}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary">{todo.taskDescription}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deleteTodo(todo._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default ToDoItem;