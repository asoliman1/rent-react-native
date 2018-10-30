import initState from '../helpers/initial_state';
import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
} from '../helpers/constants';

function authReducer(state = initState, action) {
    switch(action.type){
        case LOGIN:
        return {...state,login_loading:true,action:action}
        case LOGIN_SUCCESS:
        return {...state,login_loading:false,action:action}
        case LOGIN_FAILED:
        return {...state,login_loading:false,action:action}
        default :
        return state;
    }
}


export default authReducer