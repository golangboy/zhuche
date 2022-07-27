// pages/user/user.js
import * as api from "../../api/api"
import * as reqLogin from "../reqLogin/utils"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login: false,
  },
  handleLogin() {
    let k = reqLogin.checkLogin()
    console.log(k)
    if (false == k) {
      reqLogin.navigateLogin();
    }
    console.log(k)
    reqLogin.navigateLogin()
  },
  exitLogin() {
    reqLogin.exitCurUser();
    this.setData({
      login: false
    })
    this.onLoad();
  },
  toOrderListPage(e) {
    //console.log(e.currentTarget.dataset.target)
    wx.navigateTo({
      url: '/pages/orderList/orderList?k=' + e.currentTarget.dataset.target,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      login: reqLogin.checkLogin()
    })
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
    this.setData({
      login: reqLogin.checkLogin()
    })
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