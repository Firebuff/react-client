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

import { Toast } from 'antd-mobile';


import { postLogin, registerApi, getUser, updateUser } from '@/api'



/* 同步action */

// const authSuccess =  user => ({type: AUTH_SUCCESS, data: user})
const authSuccess = function(user) {
    return {
        type: AUTH_SUCCESS,
        data: user
    }
}

const errorMsg = function(msg) {
    return {
        type: ERROR_MSG,
        data: msg
    }
}

const setRedirect = function(url) {
    return {
        type: SET_REDIRECT,
        data: url
    }
}


/*
    异步action
 */

// login 登录
export const login = (user) => {
    const { username, password } = user
    if (!username) {
        Toast.fail('用户名必须指定');
        return errorMsg('用户名必须指定')

    } else if (!password) {
        Toast.fail('密码必须指定');
        return errorMsg('密码必须指定')
    }

    return async dispatch => {

        const response = await postLogin({ username, password })

        if (!response.code) {
            dispatch(errorMsg(response.msg))
            Toast.fail(response.msg);
            return
        } else {
            // 登录成功
            dispatch(errorMsg(response.msg))
            dispatch(authSuccess(response.data))

            Toast.success(response.msg);
            // 提示3秒后重定向
            setTimeout(() => {
                dispatch(setRedirect('/update'))
            }, 3000)
        }
    }
}

export const register = (user) => {
    const { username, password, type, repassword } = user
    if (!username) {
        Toast.fail('用户名必须指定');
        return errorMsg('用户名必须指定')

    } else if (!password) {
        Toast.fail('密码必须指定');
        return errorMsg('密码必须指定')
    } else if (repassword != password) {
        Toast.fail('密码前后不一致');
        return errorMsg('密码前后不一致')
    } else if (!type) {
        Toast.fail('请选择注册的用户类型');
        return errorMsg('请选择注册的用户类型')
    }

    return async dispatch => {
        const res = await registerApi(user)
        if (res.code == 0) {
            dispatch(errorMsg(res.msg))
            Toast.fail(res.msg);
            return
        }

        // 登录成功
        dispatch(errorMsg(res.msg))
        dispatch(authSuccess(res.data))

        Toast.success(res.msg, 1);
        // 提示3秒后重定向
        setTimeout(() => {
            dispatch(setRedirect('/'))
        }, 1000)

    }
}


// 通过cookie 保存的userid自动登录
export const getUserInfo = () => {
    return async dispatch => {
        let res = await getUser()
        if (res.code == 1) {
            dispatch(errorMsg(res.msg))
            dispatch(authSuccess(res.data))
        } else {
            dispatch(errorMsg(res.msg))
        }
    }
}


// 更新用户信息

export const updateUserHandle = (params) => {
    return async dispatch => {
        let res = await updateUser(params)

        dispatch(errorMsg(res.msg))

        if (res.code == 1) {
            dispatch(authSuccess(res.data))
        } 
    }
}