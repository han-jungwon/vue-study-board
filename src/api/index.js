import axios from 'axios'
import router from '../router/index.js'

const DOMAIN = 'http://localhost:9090'
const UNAUTHORIZED = 401

const onUnauthorized = () => {
  router.push('/login')
}

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
    headers: {'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset = utf-8'}
  }).then(result => result.data)
    .catch(result => {
      const {status} = result.response
      if (status === UNAUTHORIZED) onUnauthorized()
      throw Error(result)
    })
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

export const board = {
  fetch () {
    return request('get', '/boards')
  }
}

export const auth = {
  login (email, password) {
    return request('post', '/login', {email, password})
  }
}
