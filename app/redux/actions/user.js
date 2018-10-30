import {
    get,
    post,
    patch,
    put,
    remove,
    api_url
} from '../helpers/api';
import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../helpers/constants'

function login(email, password) {
    return function (dispatch) {
        dispatch(load(LOGIN))
        post(`login?email=${email}&password=${password}`).then((data) => {
            if (data.data.status)
                dispatch(load(LOGIN_SUCCESS, data.data))
            else
                dispatch(load(LOGIN_FAILED, data.data))
        }).catch(err=>{
            dispatch(load(LOGIN_FAILED, err.response))
        })
    }

}

function load(type, data = {}) {
    return { type: type, data: data };
}

export { login }