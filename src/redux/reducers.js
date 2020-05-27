import { combineReducers } from 'redux'

import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER,
    RECEIVE_USER_LIST,
    RECEIVE_MSG_LIST,
    RECEIVE_MSG,
    MSG_READ,
    SET_REDIRECT
} from './action-types'

const initUser = {
    username: '',
    type: '',
}

/*
    保存在state里面的数据如下

    user: {
        username: '',
        type: '',
        msg: '', 
        redirectTo: '' 
    }
    
    其中，user就是下边 reducer 的名字 user

    所以访问数据的时候，应该这样访问： state.user.username

 */

// reducer01
function user (state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...action.data}
        case RECEIVE_USER:
            return action.data
        case RESET_USER:
            return {...initUser, msg: action.data}
        default:
            return state
    }
}


const initGlobal = {
    msg: '', // 错误提示信息
    redirect: ''  // 需要自动重定向的路由路径
}

function global (state = initGlobal, action) {
    switch (action.type) {
        case ERROR_MSG: 
            return {...state, msg: action.data} 
        case SET_REDIRECT: 
            return {...state, redirect: action.data}
        default: 
            return state
    }
}


// 暴露reducers
export default combineReducers({user, global})