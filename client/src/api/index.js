import axios from 'axios';

const url = 'http://localhost:4600/todo/';

export const fetchTodos = () => {
    return axios.get(url)
};

export const createTodo = (newItem) => {
    return axios.post(url, newItem);
}

export const updatetodo = (id, updatedItem) => {
    return axios.patch(`${url}${id}`, updatedItem);
}

export const deleteTodo = (id) => {
    return axios.delete(`${url}${id}`);
}