//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    matchInfo: {},
    date: "2017-11-01",
    time: "14:00",
    isSwitch: false,

    positions: ["前锋", "中场", "后卫", "全能", "酱油", "饮水机", "啦啦队"],
    positionIndex: 0
  },
  onLoad: function () {
    var that = this;
  },
  // 日期变化
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  // 时间变化
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  // 场上位置变化
  bindPositionChange: function (e) {
    console.log('picker position 发生选择改变，携带值为', e.detail.value);

    this.setData({
      positionIndex: e.detail.value
    })
  }
})
