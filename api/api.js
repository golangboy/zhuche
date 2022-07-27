//config.js
const BASE_URL = "http://localhost:8888"
const TIMEOUT = 10000

export {
  BASE_URL,
  TIMEOUT
}
export function get(path, param, success) {
  wx.request({
    url: BASE_URL + path,
    data: param,
    timeout: TIMEOUT,
    success: (result) => {
      success(result.data)
    }
  })
}