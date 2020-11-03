// pages/shcoolDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      {
        imgUrl: "../../images/navigate.png"
      },
      {
        imgUrl: "../../images/nfsysu.png"
      },
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  // 导航
  checkAddress() {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          longitude: 105.886772,
          latitude: 29.391787,
          scale: 18,
          name: "重庆大学城市科技学院"
        })
      }
    })
  },
  // 电话
  callPhone() {
    wx.makePhoneCall({
      phoneNumber: '023-65112861',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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