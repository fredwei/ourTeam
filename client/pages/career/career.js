//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var _data = require('../../data/data.js')

Page({
  data: {
    totalInfo: {
      income: 2000,
      expenditure: 1250
    },
    costInfo: {
      date: '2017-01-01',
      costType: 0,
      person: 0,
      personName: '',
      matter: 0,
      money: 0,
      remark: ''
    },
    filterInfo: {
      costType: 0,
      person: 0,
      matter: 0
    },
    isEdit: false,

    costFormTypes: _data.costType,
    costFormPersons: ["Neo", "Gill"],
    costFormMatters: _data.costMatter,

    costTypes: ['全部分类'],
    costPersons: ['全部人员'],
    costMatters: ['全部事项']
  },
  onLoad: function () {
    var that = this;
    
    _data.costType.unshift('全部分类');

    this.setData({
      costTypes: _data.costType
    })

    _data.costMatter.unshift('全部事项');

    this.setData({
      costMatters: _data.costMatter
    })
  },
  // 日期变化
  bindDateChange: function (e) {
    this.setData({
      'costInfo.date': e.detail.value
    });
  },
  // 表单-分类变化
  bindCostFormTypeChange: function (e) {
    this.setData({
      'costInfo.costType': e.detail.value
    });
  },
  // 筛选-全部人员变化
  bindCostFormPersonChange: function (e) {
    this.setData({
      'costInfo.person': e.detail.value
    });
  },
  // 表单-事项变化
  bindCostFormMatterChange: function (e) {
    this.setData({
      'costInfo.matter': e.detail.value
    });
  },
  // 筛选-全部分类变化
  bindCostTypeChange: function (e) {
    this.setData({
      'filterInfo.costType': e.detail.value
    });
  },
  // 筛选-全部人员变化
  bindCostPersonChange: function (e) {
    this.setData({
      'filterInfo.person': e.detail.value
    });
  },
  // 筛选-全部事物变化
  bindCostMatterChange: function (e) {
    this.setData({
      'filterInfo.matter': e.detail.value
    });
  },
  // 展开编辑
  switchEdit: function () {
    var that = this;

    that.setData({
      isEdit: !that.data.isEdit
    })
  }
})
