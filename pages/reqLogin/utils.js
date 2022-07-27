export function checkLogin() {
  let us = wx.getStorageSync('jwt')
  if (us == undefined || us == "")
    return false
  return true
}
export function exitCurUser() {
  wx.setStorageSync('jwt', false)
}
export function navigateLogin() {
  wx.navigateTo({
    url: '/pages/reqLogin/reqLogin',
  })
}