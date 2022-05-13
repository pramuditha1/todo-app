import express from 'express';
import { getTodos, createTodos, updateTodo, deleteTodo } from '../controllers/todos.js';

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodos);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;