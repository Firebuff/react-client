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


// const authSuccess =  user => ({type: AUTH_SUCCESS, data: user})
const authSuccess =  function (user) {
    return {
        type: AUTH_SUCCESS,
        data: user
    }
}

const errorMsg = function (msg) {
    return {
        type: 'ERROR_MSG',
        data: msg
    }
}


// login action
export const login = (user) => {
    const {username, password} = user

    if (!username) {
        return errorMsg('用户名必须指定')
    } else if (!password) {
        return errorMsg('密码必须指定')
    }

    return asyn dispatch => {
        const reponse = await reqLogin(uer)
        const result = response.data
        if (result.code == 1) {
            getMsgList(dispatch, result.data._id)
            dispatch(authSuccess(result.data))
        } else {
            dispatch()
        }
    }
}

