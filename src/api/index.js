import { get, post } from './ajax'

export const postLogin = function (params) {
    // return post('/login', params)
    return post('/login', params)
}
export const register = function (params) {
    return post('/register', {...params})
}