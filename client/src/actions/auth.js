import api from '../utils/api';
import { setError } from './alerts';
import {
    REGISTER_SUCCESS, 
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    GET_USER
} from './types';


/* ===================================
   Register
=================================== */

export const register = (name, password) => async dispatch => {
    try {
        const body = JSON.stringify({ name, password });

        const res = await api.post('/api/user/register', body);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        dispatch(setError(err.response.data.msg))
        
        dispatch({
            type: REGISTER_FAIL
        })
    }
} 


/* ===================================
   Login user
=================================== */

export const login = (name, password) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, password });

    try {

        const res = await api.post(`/api/user/login`, body, config);
        
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })


    } catch (err) {
        dispatch(setError(err.response.data.msg))
        
        dispatch({
            type: LOGIN_FAIL
        })
    }
}



/* ===================================
   Get User
=================================== */

export const getUser = () => async dispatch => {
    try {
        const res = await api.get('/api/user');

        dispatch({
            type: GET_USER,
            payload: res.data
        })

    } catch (err) {
        console.log(err.message);
    }
}
