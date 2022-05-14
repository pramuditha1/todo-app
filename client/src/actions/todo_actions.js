import * as api from '../api'
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionType'

//action creators
//what are action creators : functions that return actions
export const getTodos = () => async (dispatch) => {
    try {
        const {data} = await api.fetchTodos();
        dispatch({type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error.message)
    }  
}

export const createTodo = (todoItem) => async (dispatch) => {
    console.log(`create todo item is : ${JSON.stringify(todoItem)}`)
    try {
        const { data } = await api.createTodo(todoItem);
        dispatch({ type: CREATE, payload: data});
    } catch (error) {
        console.log(error)
    }
}