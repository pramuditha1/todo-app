import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionType'

export default (todos = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...todos, action.payload];
        default:
            return todos;
    }
}