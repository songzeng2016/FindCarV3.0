//获取应用实例
// var WxSearch = require('../../wxSearch/wxSearch.js')
// var detail = ''
// var dijkl = ''
// var baoMa = ''
// var beiZhun = ''
// var lianXiRen = ''
// var dianHua = ''

const app = getApp()
const { wc } = app
let { companyNo } = app
const { imgUrl, data, code, success } = wc

Page({
  data: {
    // wxSearchData:{
    //   view:{
    //     isShow: true
    //   }
    // }
  },

  makePhone: function (e) {
    let phone = e.currentTarget.dataset.phone.toString()
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },

  onLoad: function () {
    companyNo = app.companyNo
    const that = this
    let showCarData = {
      a: 'getShowCar',
      input: {
        pagenum: 0,
        company_no: companyNo
      }
    }

    wc.get(showCarData, (json) => {
      if (json[code] === success) {
        for (let i in json[data].carlist) {
          for (let j in json[data].carlist[i].carsinfo) {
            if (!!json[data].carlist[i].carsinfo[j].car_img) {
              json[data].carlist[i].carsinfo[j].car_img = imgUrl + json[data].carlist[i].carsinfo[j].car_img
            }
          }
        }
        that.setData({
          carList: json[data].carlist
        })
      }
    })

    // wx.request({
    //   url: 'http://demo.icarplus.net/api.php?m=ApiFindCar&a=getShowCar&input={"pagenum":"0","carname":"别克"}',
    // })


    //初始化的时候渲染wxSearchdata
    // WxSearch.init(that, 43, ['weappdev', '小程序', 'wxParse', 'wxSearch', 'wxNotification']);
    // WxSearch.initMindKeys(['weappdev.com', '微信小程序开发', '微信开发', '微信小程序']);
  },
  // wxSearchFn: function (e) {
  //   var that = this
  //   WxSearch.wxSearchAddHisKey(that);

  // },
  // wxSearchInput: function (e) {
  //   var that = this
  //   WxSearch.wxSearchInput(e, that);
  // },
  // wxSerchFocus: function (e) {
  //   var that = this
  //   WxSearch.wxSearchFocus(e, that);
  // },
  // wxSearchBlur: function (e) {
  //   var that = this
  //   WxSearch.wxSearchBlur(e, that);
  // },
  // wxSearchKeyTap: function (e) {
  //   var that = this
  //   WxSearch.wxSearchKeyTap(e, that);
  // },
  // wxSearchDeleteKey: function (e) {
  //   var that = this
  //   WxSearch.wxSearchDeleteKey(e, that);
  // },
  // wxSearchDeleteAll: function (e) {
  //   var that = this;
  //   WxSearch.wxSearchDeleteAll(that);
  // },
  // wxSearchTap: function (e) {
  //   var that = this
  //   WxSearch.wxSearchHiddenPancel(that);
  // }
})
