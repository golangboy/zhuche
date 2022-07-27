// pages/reqLogin/reqLogin.js
import * as api from "../../api/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getUserInfo(e) {
    wx.login({
      success: (res) => {
        console.log(res)
        api.get("/login", res, (res) => {
          let jwt = res.token;
          if (jwt.length > 0) {
            wx.setStorageSync('jwt', jwt)
            wx.showToast({
              title: '登录成功',
            })
            wx.navigateBack({
              delta: 0,
            })
          } else {
            wx.showToast({
              title: '登录失败',
            })
          }
        })
      }
    })
    return;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})