const app = getApp()
const wc = app.wc
const {data, code, success} = wc
Page({

  // 事件处理函数
  gotoRegisterTap: function () {
    wx.navigateTo({
      url: '../registered/registered'
    })
  },
  login: function (e) {
    let formData = e.detail.value
    let phone = formData.phone
    let password = formData.password
    if (!phone || !password) {
      wc.showModal('请输入完整信息')
      return;
    }
    wc.showLoading()
    let loginData = {
      a: 'login',
      input: {
        account: 'test3',
        password: '123456'
      }
    }
    wc.get(loginData, (json) => {
      if (json[code] === success) {
        app.companyNo = json[data].company_no
        wc.hideLoding()
        wx.switchTab({
          url: '/HomePage/ZhaoCar/ZhaoCar'
        })
      }
    })

  },
  onLoad: function () {

  }
})