const app = getApp()
const wc = app.wc
Page({

  // 事件处理函数
  gotoRegisterTap: function () {
    wx.navigateTo({
      url: '../registered/registered'
    })
  },
  login: function () {
    wc.showLoading()
    let data = {
      a: 'login',
      input: {
        account: 'test3',
        password: 123456
      }
    }
    wc.get(data, (json) => {
      console.log(json)
    })

    // wx.switchTab({
    //   url: '../../HomePage/ZhaoCar/ZhaoCar'
    // })

  },
  onLoad: function () {

  }
})