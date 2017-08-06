// var app = getApp()
// Page({

//  // 事件处理函数
//   gotoRegisterTap: function() {
//     wx.navigateTo({
//       url: '../registered/registered'
//     })
//   },
//   //  login: function() {
//   //   wx.switchTab({
//   //     url: '../Car/car'
//   //   })

//   // },
//   onLoad: function () {
//     console.log('onLoad')
//     var that = this
//     //调用应用实例的方法获取全局数据
//     app.getUserInfo(function(userInfo){
//       //更新数据
//       that.setData({
//         userInfo:userInfo
//       })
//     })
//   }
// })
//index.js
//获取应用实例
var WxSearch = require('../../wxSearch/wxSearch.js')
var app = getApp()
var detail = ''
var dijkl = ''
var baoMa = ''
var beiZhun = ''
var lianXiRen = ''
var dianHua = ''
Page({
  data: {

    list: [
      {
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
      },
      {
        carList: [
          {
            src: 'Car3.png',
            info: '蒙迪欧'
          },
          {
            src: '',
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
      },
      {
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
    ]
    // wxSearchData:{
    //   view:{
    //     isShow: true
    //   }
    // }
  },

  makePhone: function(e) {
    let phone = e.currentTarget.dataset.phone.toString()
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        detail: "蒙迪奥",
        dijkl: "宝马X6",
        baoMa: "大众cc阿斯顿马丁",
        beiZhun: "备注：测试",
        lianXiRen: "本田",
        dianHua: "备注：欢迎欢迎，热烈欢迎"
      })
    })
    //初始化的时候渲染wxSearchdata
    WxSearch.init(that, 43, ['weappdev', '小程序', 'wxParse', 'wxSearch', 'wxNotification']);
    WxSearch.initMindKeys(['weappdev.com', '微信小程序开发', '微信开发', '微信小程序']);
  },
  wxSearchFn: function (e) {
    var that = this
    WxSearch.wxSearchAddHisKey(that);

  },
  wxSearchInput: function (e) {
    var that = this
    WxSearch.wxSearchInput(e, that);
  },
  wxSerchFocus: function (e) {
    var that = this
    WxSearch.wxSearchFocus(e, that);
  },
  wxSearchBlur: function (e) {
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    var that = this
    WxSearch.wxSearchKeyTap(e, that);
  },
  wxSearchDeleteKey: function (e) {
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  wxSearchDeleteAll: function (e) {
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function (e) {
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  }
})
