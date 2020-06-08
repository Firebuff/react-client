import { get, post } from './ajax'

export const postLogin = function (params) {
    // return post('/login', params)
    return post('/login', params)
}
export const registerApi = function (params) {
    return post('/register', {...params})
}

export const getUser = function () {
    return get('/user')
}