// components/order_list/order_list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    choiceItem: 'two',
    clickToPage: '',
    orderId: '123456789'
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    changeTabs(e) {

    },
    toDetail() {
      wx.navigateTo({
        url: this.data.clickToPage,
      })
    }
  }
})