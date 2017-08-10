// HomePage/shareInfo/shareInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgImg: ['beij.png', 'beiji.jpg'],
    bgIndex: 0,
    phoneImg: ['phop.png', 'phop.png'],
    info: {
      avatar: '',
      carList: [
        {
          src: '',
          info: '蒙迪欧'
        },
        {
          src: 'Car1.png',
          info: '宝马X6'
        },
        {
          src: '',
          info: '大众cc 阿斯顿马丁'
        }
      ],
      remark: '热烈欢迎',
      comInfo: {
        name: '车咖卡',
        phone: 15120814794
      }
    }
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  makePhone: function (e) {
    let phone = e.currentTarget.dataset.phone.toString()
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },
  touchStart: function (e) {
    let startX = e.touches[0].clientX
    this.data.startX = startX
  },
  touchMove: function(e) {
    let startX = this.data.startX
    let endX = e.touches[0].clientX
    let moveX = endX - startX
    console.log(moveX)
    this.setData({
      scrollLeft: -moveX
    })
  },
  touchEnd: function (e) {
    let startX = this.data.startX
    let endX = e.changedTouches[0].clientX
    let moveX = endX - startX
    let bgIndex = this.data.bgIndex
    if (Math.abs(moveX) < 20) {
      return;
    }
    if (moveX > 0) {
      if (bgIndex > 0) {
        this.setData({
          bgIndex: bgIndex - 1
        })
      }
    } else {
      if (bgIndex < this.data.bgImg.length - 1) {
        this.setData({
          bgIndex: bgIndex + 1
        })
      }
    }
  },
  moreCar: function () {
    wx.switchTab({
      url: '/HomePage/ZhaoCar/ZhaoCar',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showShareMenu({
    //   withShareTicket: true
    // })

    wx.request({
      url: 'http://demo.icarplus.net/api.php?m=ApiFindCar&a=getShareInfo& input={"company_no":"tkpqoa1444904442"}',
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