// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // filterData、categoryData数据和地图页数据一致
    /**分类选项 */
    filterData: ['大门', '教学楼', '行政楼', '图书馆', '学院', '实验楼', '创业基地', '宿舍', '活动', '餐厅', '商店', '快递', '后勤、校园服务'],
    activeIndex: 0,
    categoryData: [
      [{
        id: 1,
        longitude: 105.883641,
        latitude: 29.387147,
        title: "西门",
        iconPath: '../../images/markers/xm.png'
      },
      {
        id: 2,
        longitude: 105.883679,
        latitude: 29.389248,
        title: "西南门",
        iconPath: '../../images/markers/xm.png'
      },
      {
        id: 3,
        longitude: 105.885746,
        latitude: 29.393299,
        title: "北门",
        iconPath: '../../images/markers/xm.png'
      },
      ],
      [{
        id: 1,
        longitude: 105.884477,
        latitude: 29.390423,
        title: "主教学楼",
        iconPath: '../../images/markers/jxl.png'
      },
      {
        id: 2,
        longitude: 105.886494,
        latitude: 29.389156,
        title: "第一教学楼",
        iconPath: '../../images/markers/jxl.png'
      },
      {
        id: 3,
        longitude: 105.887336,
        latitude: 29.392316,
        title: "第二教学楼",
        iconPath: '../../images/markers/jxl.png'
      },
      {
        id: 4,
        longitude: 105.8863,
        latitude: 29.390727,
        title: "第三教学楼",
        iconPath: '../../images/markers/jxl.png'
      },
      {
        id: 6,
        longitude: 105.888672,
        latitude: 29.392124,
        title: "第五教学楼",
        iconPath: '../../images/markers/jxl.png'
      },
      {
        id: 7,
        longitude: 105.886327,
        latitude: 29.390409,
        title: "第六教学楼",
        iconPath: '../../images/markers/jxl.png'
      },
      ],
      [{
        id: 1,
        longitude: 105.886955,
        latitude: 29.392489,
        title: "行政楼",
        iconPath: '../../images/markers/xzl.png'
      },
      {
        id: 2,
        longitude: 105.886821,
        latitude: 29.391129,
        title: "第二行政楼",
        iconPath: '../../images/markers/xzl.png'
      },
      ],
      [{
        id: 1,
        longitude: 105.889498,
        latitude: 29.392849,
        title: "图书馆",
        iconPath: '../../images/location.png'
      }],
      [{
        id: 1,
        longitude: 105.885987,
        latitude: 29.392177,
        title: "土木工程学院",
        iconPath: '../../images/location.png'
      },
      {
        id: 2,
        longitude: 105.887298,
        latitude: 29.392242,
        title: "艺术设计学院",
        iconPath: '../../images/location.png'
      },
      ],
      [{
        id: 1,
        longitude: 105.88533,
        latitude: 29.391867,
        title: "建筑材料实验室",
        iconPath: '../../images/location.png'
      },
      {
        id: 2,
        longitude: 105.886268,
        latitude: 29.391447,
        title: "实验楼",
        iconPath: '../../images/location.png'
      },
      ],
      [{
        id: 1,
        longitude: 105.886754,
        latitude: 29.391039,
        title: "重大城科云竹众创空间",
        iconPath: '../../images/location.png'
      }],
      [{
        id: 1,
        longitude: 105.885136,
        latitude: 29.386861,
        title: "重庆大学城市科技学院教师公寓",
        iconPath: '../../images/markers/xsss.png'
      },
      {
        id: 2,
        longitude: 105.887566,
        latitude: 29.390975,
        title: "学生公寓15号楼",
        iconPath: '../../images/markers/xsss.png'
      },
      {
        id: 3,
        longitude: 105.888291,
        latitude: 29.394812,
        title: "女生宿舍楼5栋",
        iconPath: '../../images/markers/xsss.png'
      },
      ],
      [{
        id: 1,
        longitude: 105.88453,
        latitude: 29.388399,
        title: "足球场",
        iconPath: '../../images/markers/tycs.png'
      },
      {
        id: 2,
        longitude: 105.889718,
        latitude: 29.394718,
        title: "博弈台球室",
        iconPath: '../../images/markers/tycs.png'
      },
      ],
      [{
        id: 1,
        longitude: 105.885608,
        latitude: 29.39047,
        title: "琼阁苑餐厅",
        iconPath: '../../images/markers/st.png'
      }],
      [{
        id: 1,
        longitude: 105.884847,
        latitude: 29.389652,
        title: "诚源便利店",
        iconPath: '../../images/location.png'
      }],
      [{
        id: 1,
        longitude: 105.889109,
        latitude: 29.394766,
        title: "京东快递",
        iconPath: '../../images/location.png'
      }],
      [{
        id: 1,
        longitude: 105.885386,
        latitude: 29.390471,
        title: "后勤库房",
        iconPath: '../../images/location.png'
      },
      {
        id: 2,
        longitude: 105.886355,
        latitude: 29.391228,
        title: "重庆大学城市科技学院校园安全服务岗",
        iconPath: '../../images/location.png'
      },
      ]
    ],
    resultData: []
  },
  active(e) {
    const { index } = e.currentTarget.dataset
    this.setData({
      activeIndex: index,
      resultData: this.data.categoryData[index]
    })
  },
  bindinput(e) {
    const value = e.detail.value.trim()
    var result = []
    if (value !== '') {
      for (const i of this.data.categoryData) {
        for (const j of i) {
          if (j.title.includes(value)) {
            result.push(j);
          }
        }
      }
    } else {
      result = this.data.categoryData[this.data.activeIndex]
    }
    this.setData({
      resultData: result
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      resultData: this.data.categoryData[0]
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