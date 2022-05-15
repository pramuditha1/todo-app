import express from 'express';
import { getTodos, createTodos, updateTodo, deleteTodo } from '../controllers/todos.js';
import { checkJwt } from '../auth/checkJwt.js';

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodos);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;