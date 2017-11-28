//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    matchInfo: {
      matchType: 0,
      teamNo: 0,
      remark: ''
    },
    isEdit: false,
    date: "2017-11-01",

    matchFormTypes: ["友谊赛", "联赛", "杯赛"],
    TeamLists: ["推土机一队", "推土机2队", "推土机11队"],

    matchTypes: ["友谊赛列表", "联赛列表", "杯赛列表"],
    matchType: 0
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
  // 列表类型
  bindMatchTypeChange: function (e) {
    this.setData({
      matchType: e.detail.value
    })
  },
  bindMatchFormTypesChange: function (e) {
    this.setData({
      'matchInfo.matchType': e.detail.value
    })
  },  
  // 展开编辑
  switchEdit: function () {
    var that = this;

    that.setData({
      isEdit: !that.data.isEdit
    })
  }
})
