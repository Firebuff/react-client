import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:3000',
})

export const get = function (url, params) {
	return instance.get(url, { params: {...params}})
}

export const post = function (url, params) {
	return instance.post(url, {...params})
}
