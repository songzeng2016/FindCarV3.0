
const HOST = 'http://demo.icarplus.net/api.php'
const M = { m: 'ApiFindCar' }

class wc {
  constructor() {
    this.host = HOST
  }

  get(data, success) {
    wx.request({
      url: this.host,
      data: this.extend(M, data || {}),
      success: function (res) {
        typeof (success) === 'function' && success(res.data)
      }
    })
  }

  showLoading() {
    wx.showLoading({
      title: 'loading',
      mask: true
    })
  }

  hideLoding() {
    wx.hideLoading()
  }

  // 扩展json
  extend(destination, source) {
    for (var property in source) {
      destination[property] = source[property];
    }
    return destination
  }
}

export default wc