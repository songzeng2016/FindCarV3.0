// HomePage/carInfo/carInfo.js
const app = getApp()
const { wc, companyNo } = app
const { imgUrl, data, code, success } = wc
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showSelect: false,
    currentCar: 0,
    selectCar: ['Car1.png', 'Car2.png', 'Car3.png', 'Car4.png', 'Car5.png',
      'Car6.png', 'Car7.png'],
    carInfo: []
  },

  submitCarInfo: function () {
    let carInfo = this.data.carInfo
    let remark = this.data.remark
    console.log(carInfo)
    console.log(remark)

    let carName = {
      maxrow: carInfo.length
    }
    for (let i in carInfo) {
      carName['carname_' + (parseInt(i) + 1)] = carInfo[i].carname
    }

    let changeCarData = {
      a: 'changeCar',
      input: wc.extend(carName, {
        company_no: companyNo,
        remark
      })
    }

    wc.get(changeCarData)

    console.log(changeCarData)

    // 'http://demo.icarplus.net/api.php?m=ApiFindCar&a=changeCar&input={"company_no":"tkpqoa1444904442","maxrow":"3","carname_1":"14年凯美瑞黑色","carname_2":"2015款丰田新款卡罗拉","carname_3":"2016mini敞篷","car_img_1":"car_2.png","car_img_3":"car_5.png","remark":"欢迎来租"}'

  },
  carNameInput: function (e) {
    let value = e.detail.value
    let index = e.currentTarget.dataset.index
    this.data.carInfo[index].carname = value
  },
  remarkInput: function (e) {
    let value = e.detail.value
    this.data.remark = value
  },

  addCar: function () {
    let carInfo = this.data.carInfo
    carInfo.push({})
    this.setData({ carInfo })
  },
  deleteCar: function (e) {
    let carInfo = this.data.carInfo
    let data = e.currentTarget.dataset
    let index = data.index
    carInfo.splice(index, 1)
    this.setData({ carInfo })
  },
  changeCar: function (e) {
    let carInfo = this.data.carInfo
    let data = e.currentTarget.dataset
    let index = data.index
    this.setData({
      currentCar: index,
      showSelect: true
    })
  },

  closeMak: function () {
    this.setData({
      showSelect: false
    })
  },
  selectCar: function (e) {
    let carInfo = this.data.carInfo
    let currentCar = this.data.currentCar
    let data = e.currentTarget.dataset
    let src = data.src
    carInfo[currentCar].src = src
    this.setData({
      carInfo,
      showSelect: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    let getMyCarData = {
      a: 'getMyCar',
      input: {
        company_no: companyNo
      }
    }

    wc.get(getMyCarData, (json) => {
      if (json[code] === success) {
        for (let i in json[data].car_list) {
          if (!!json[data].car_list[i].car_img) {
            json[data].car_list[i].car_img = imgUrl + json[data].car_list[i].car_img
          }
        }
        that.setData({
          carInfo: json[data].car_list,
          remark: json[data].remark
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