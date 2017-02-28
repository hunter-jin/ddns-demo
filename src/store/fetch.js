const stream = weex.requireModule('stream')
const baseURL = 'http://127.0.0.1:8088/api/v0'

export function fetch (path) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'GET',
      url: `${baseURL}/${path}`,
      type: 'json'
    }, (response) => {
      if (response.status === 200) {
        resolve(response.data)
      } else {
        reject(response)
      }
    }, () => {})
  })
}

export function fetchLogin (userCode, password) {
  return fetch('user/login')
}
