import * as api from '../api'
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionType'

//action creators
//what are action creators : functions that return actions
export const getTodos = () => async (dispatch) => {
    try {
        const {data} = await api.fetchTodos();
        dispatch({type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error)
    }  
}

export const createTodo = (todoItem) => async (dispatch) => {
    try {
        const { data } = await api.createTodo(todoItem);
        dispatch({ type: CREATE, payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const updateTodo = (id, updatedItem) => async (dispatch) => {
    try {
        const {data} = await api.updatetodo(id, updatedItem);
        dispatch({type: UPDATE, payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await api.deleteTodo(id);
        dispatch({type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}