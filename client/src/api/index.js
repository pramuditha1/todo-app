import axios from 'axios';

const url = 'https://todo93.herokuapp.com/todo/';

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