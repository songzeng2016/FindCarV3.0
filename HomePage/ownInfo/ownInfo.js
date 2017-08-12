// HomePage/ownInfo/ownInfo.js
const app = getApp()
const { wc, companyNo } = app
const { imgUrl, data, code, success } = wc

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  selectImg: function () {
    const that = this

    wx.chooseImage({
      count: 1,
      success: function (res) {
        let tempFilePaths = res.tempFilePaths[0]
        that.setData({
          'lgSrc': tempFilePaths
        })
        wx.uploadFile({
          url: 'http://demo.icarplus.net/api.php',
          filePath: tempFilePaths,
          name: 'dataurl',
          formData: {
            m: 'ApiFindCar',
            a: 'addLogo',
            input: {
              company_no: companyNo
            }
          },
          success: (res) => {
            console.log(res)
          }
        })
      },
    })
  },
  submitCompanyInfo: function (e) {
    let formData = e.detail.value
    for (let i in formData) {
      if (!formData[i]) {
        wc.showModal('请输入完整参数')
        return
      }
    }
    let submitData = {
      a: 'changeCompanyInfo',
      input: wc.extend(formData, {
        company_no: companyNo
      })
    }

    wc.get(submitData, (json) => {

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    let companyData = {
      a: 'getCompanyInfo',
      input: {
        company_no: companyNo
      }
    }

    wc.get(companyData, (json) => {
      if (json[code] === success) {
        that.setData({
          companyInfo: json[data].company_info,
          lgSrc: !!json[data].lg_src ? imgUrl + json[data].lg_src : ''
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})