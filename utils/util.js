// 定义常量
const HOST = 'http://demo.icarplus.net/api.php'
const IMGURL = 'http://demo.icarplus.net'
const [DATA, CODE, SUCCESSCODE, MESSAGE] = ['data', 'returnCode', '10000', 'returnMsg']
const M = { m: 'ApiFindCar' }

class wc {
  constructor() {
    this.host = HOST
    this.imgUrl = IMGURL
    this.data = DATA
    this.code = CODE
    this.success = SUCCESSCODE
    this.message = MESSAGE
  }

  get(data, success) {
    wx.request({
      url: this.host,
      data: this.extend(M, data || {}),
      success: (res) => {
        typeof (success) === 'function' && success(res.data)
      },
      complete: (res) => {
        if (res.data[this.code] !== this.success) {
          this.showModal(res.data[this.message])
        }
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

  showModal(content, showCancel, title) {
    wx.showModal({
      title: title || '提示',
      content: content || '',
      showCancel: showCancel || false,
      cancelText: '',
      cancelColor: '',
      confirmText: '',
      confirmColor: '',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }

  // 扩展json
  extend(destination, source) {
    for (let property in source) {
      destination[property] = source[property];
    }
    return destination
  }
}

export default wc