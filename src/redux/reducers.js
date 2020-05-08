import { combineReducers } from 'redux'

import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER,
    RECEIVE_USER_LIST,
    RECEIVE_MSG_LIST,
    RECEIVE_MSG,
    MSG_READ
} from './action-types'

const initUser = {
    username: '',
    type: '',
    msg: '', // 错误提示信息
    redirectTo: ''  // 需要自动重定向的路由路径
}

// reducer01
function user (state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...action.data}

        case ERROR_MSG: 
            return {...state, msg: action.data}
        case RECEIVE_USER:
            return action.data
        case RESET_USER:
            return {...initUser, msg: action.data}
        default:
            return state
    }
}



// 暴露reducers
export default combineReducers({user})