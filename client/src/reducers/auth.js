import { SET_AUTH_DATA, LOGOUT } from '../constants/actionType'

export default (state = { authData: null }, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
          localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
          return { ...state, authData: action.data, loading: false, errors: null };
        case LOGOUT:
          localStorage.clear();
          return { ...state, authData: null, loading: false, errors: null };
        default:
          return state;
      }
}