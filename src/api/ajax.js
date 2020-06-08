import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:4000',
	withCredentials: true
})

export const get = function (url, params) {
	return instance.get(url, { params: {...params}}).then ((res) => {
		return res.data
	})
}

export const post = function (url, params) {
	return instance.post(url, {...params}).then ((res) => {
		return res.data
	})
}
