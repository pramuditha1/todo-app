import axios from 'axios';

const url = 'http://localhost:4600/todo/';

export const fetchTodos = () => axios.get(url);

export const createTodo = (newItem) => {
    axios.post(url, newItem);
}