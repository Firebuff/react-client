import { get, post } from './ajax'

export const postLogin = function (params) {
    return post('/login', params)
}
export const getList = function (params) {
    return get('/list', {...params})
}