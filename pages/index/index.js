//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    longitude: "",
    latitude: "",
    showCompass: true, // 是否开启指南针
    showLocation: true, // 显示带有方向的当前定位点
    enableRotate: true, // 是否支持旋转
    scale: 16, // 缩放级别，取值范围为3-20
    /**
     * 标记
     */
    markers: [],
    /**分类选项 */
    filterData: ['大门', '教学楼', '行政楼', '图书馆', '学院', '实验楼', '创业基地', '宿舍', '活动', '餐厅', '商店', '快递', '后勤、校园服务'],
    /**分类数据 */
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
    /**路线 */
    polyline: [],
    tagLine: [
      // 中方向
      [
        {
          points: [
            { id: 1, latitude: 29.389509, longitude: 105.883934, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 2, latitude: 29.389443, longitude: 105.884342, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 3, latitude: 29.390617, longitude: 105.886091, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 4, latitude: 29.389995, longitude: 105.886644, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 5, latitude: 29.389888, longitude: 105.887201, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 6, latitude: 29.390823, longitude: 105.887348, iconPath: '../../images/location.png', title: '教学楼' },
          ],
          color: "#e21918",
          width: 5,
          borderWidth: 2,
        }
      ],
      // 东方向
      [
        {
          points: [
            { id: 1, latitude: 29.389509, longitude: 105.883934, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 2, latitude: 29.389443, longitude: 105.884342, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 3, latitude: 29.390617, longitude: 105.886091, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 4, latitude: 29.389995, longitude: 105.886644, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 5, latitude: 29.389888, longitude: 105.887201, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 6, latitude: 29.390823, longitude: 105.887348, iconPath: '../../images/location.png', title: '教学楼' },
          ],
          color: "#e21918",
          width: 5,
          borderWidth: 2,
        }
      ],
      // 南方向
      [
        {
          points: [
            { id: 1, latitude: 29.389509, longitude: 105.883934, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 2, latitude: 29.389443, longitude: 105.884342, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 3, latitude: 29.390617, longitude: 105.886091, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 4, latitude: 29.389995, longitude: 105.886644, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 5, latitude: 29.389888, longitude: 105.887201, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 6, latitude: 29.390823, longitude: 105.887348, iconPath: '../../images/location.png', title: '教学楼' },
          ],
          color: "#e21918",
          width: 5,
          borderWidth: 2,
        }
      ],
      // 西方向
      [
        {
          points: [
            { id: 1, latitude: 29.389509, longitude: 105.883934, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 2, latitude: 29.389443, longitude: 105.884342, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 3, latitude: 29.390617, longitude: 105.886091, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 4, latitude: 29.389995, longitude: 105.886644, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 5, latitude: 29.389888, longitude: 105.887201, iconPath: '../../images/location.png', title: '教学楼' },
            { id: 6, latitude: 29.390823, longitude: 105.887348, iconPath: '../../images/location.png', title: '教学楼' },
          ],
          color: "#e21918",
          width: 5,
          borderWidth: 2,
        }
      ],
    ],
    /**区域 */
    polygon: [
      {
        points: [
          { latitude: 29.386410, longitude: 105.883586 },
          { latitude: 29.386634, longitude: 105.883693 },
          { latitude: 29.386887, longitude: 105.883741 },
          { latitude: 29.387092, longitude: 105.883741 },
          { latitude: 29.388822, longitude: 105.883763 },
          { latitude: 29.389037, longitude: 105.883768 },
          { latitude: 29.389126, longitude: 105.883827 },
          { latitude: 29.390261, longitude: 105.883564 },
          { latitude: 29.391163, longitude: 105.884036 },
          { latitude: 29.391738, longitude: 105.884551 },
          { latitude: 29.391958, longitude: 105.884745 },
          { latitude: 29.392982, longitude: 105.885313 },
          { latitude: 29.393136, longitude: 105.885592 },
          { latitude: 29.393491, longitude: 105.885952 },
          { latitude: 29.393856, longitude: 105.886257 },
          { latitude: 29.395828, longitude: 105.887979 },
          { latitude: 29.395898, longitude: 105.887958 },
          { latitude: 29.395921, longitude: 105.888011 },
          { latitude: 29.395501, longitude: 105.889878 },
          { latitude: 29.395211, longitude: 105.890785 },
          { latitude: 29.394632, longitude: 105.891021 },
          { latitude: 29.393715, longitude: 105.890881 },
          { latitude: 29.393285, longitude: 105.890501 },
          { latitude: 29.392084, longitude: 105.890023 },
          { latitude: 29.390486, longitude: 105.888113 },
          { latitude: 29.389013, longitude: 105.887405 },
          { latitude: 29.385844, longitude: 105.884938 },
          { latitude: 29.386410, longitude: 105.883586 }
        ],
        strokeWidth: 3,
        strokeColor: "#6791e5",
        zIndex: 88
      }
    ],
    directionData: ['中', '东', '南', '西'],
    polylineShow: true,
    activeIndex: 0,
    activeShow: true,
    mapLine: false
  },
  //事件处理函数
  active(e) {
    const {
      index
    } = e.currentTarget.dataset
    this.setData({
      activeIndex: index,
      markers: this.data.categoryData[index],
      polyline: [],
      polylineShow: true
    })
  },
  //**开关菜单 */
  activeMap() {
    let that = this
    that.setData({
      activeShow: !this.data.activeShow,
    })
  },
  /**学校详情 */
  jump() {
    wx.navigateTo({
      url: '../shcoolDetail/index',
    })
  },
  /**路线 */
  pathLine() {
    this.setData({
      polylineShow: !this.data.polylineShow,
      activeShow: false
    })
  },
  /**个人当前位置 */
  nowAddress() {
    wx.getLocation({
      success: (res) => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },
  /**拖动地图 */
  moveMap(e) {
    if (e.type === 'end') {
      this.setData({
        latitude: "",
        longitude: ""
      })
    }
  },
  /**搜索 */
  search() {
    wx.navigateTo({
      url: '../search/index',
    })
  },
  /**游览路线 */
  editLine(e) {
    const { line } = e.currentTarget.dataset
    this.data.tagLine[line].forEach(item => {
      this.setData({
        markers: item.points
      })
    })
    this.setData({
      polyline: this.data.tagLine[line],
      mapLine: true,
      polylineShow: true
    })
  },
  /**关闭路线 */
  closeLine() {
    this.setData({
      polyline: [],
      mapLine: false
    })
  },
  onLoad: function () {
    let that = this
    that.setData({
      markers: that.data.categoryData[0]
    })
    that.mapCtx = wx.createMapContext('myMap')
    that.setData({
      longitude: 105.886772,
      latitude: 29.391787,
    })
  },
})