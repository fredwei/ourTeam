//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var _data = require('../../data/data.js')

Page({
  data: {
    isEdit: false,

    playerInfo: {
      openId: '',
      username: '',
      shirtName: '',
      shirtNo: '',
      position: 0,
      sex: 0,
      height: '',
      weight: '',
      foot: 0,
      phone: '',
      date: '1990-01-01',
      region: ''
    },

    positions: _data.positions,

    sexs: _data.sexs,

    foots: _data.foots,

    region: _data.region,
    regionItem: _data.regionItem
  },
  onLoad: function () {
    var that = this;
  },
  // 队员初始化
  playerInit: function (item) {
    // 编辑时传入数据 - item
    // 新增时不传入

    var _item = item || {};

    var _playerInfo = {
      openId: '',
      username: '',
      shirtName: 'fred wei',
      shirtNo: '11',
      position: 0,
      sex: 0,
      height: 177,
      weight: 67.5,
      foot: 0,
      phone: '15019261433',
      date: '1990-01-01',
      region: '广东省,深圳市,南山区'
    };

    // 地区处理
    _playerInfo.region = _playerInfo.region.split(',');

    this.setData({
      playerInfo: _playerInfo
    });
  },
  // 日期变化
  bindDateChange: function (e) {
    this.setData({
      'playerInfo.date': e.detail.value
    });
  },
  // 场上位置变化
  bindPositionChange: function (e) {
    this.setData({
      'playerInfo.position': e.detail.value
    });
  },
  // 性别变化
  bindSexChange: function (e) {
    this.setData({
      'playerInfo.sex': e.detail.value
    });
  },
  // 惯用脚变化
  bindFootChange: function (e) {
    this.setData({
      'playerInfo.foot': e.detail.value
    });
  },
  // 地区变化
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    });

    this.setData({
      'playerInfo.region': e.detail.value.join(',')
    });
  },
  // 保存
  saveInfo: function () {
    util.showBusy('请求中...')
    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/demo`,
      login: false,
      success(result) {
        util.showSuccess('请求成功完成')
        // that.setData({
        //   requestResult: JSON.stringify(result.data)
        // })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  },
  // 新增
  playerAdd: function () {
    var that = this;

    that.setData({
      isEdit: true
    });

    that.playerInit();
  },
  // 编辑
  playerEdit: function (item) {
    var that = this;

    that.setData({
      isEdit: true
    });

    that.playerInit();
  },
  // 展开编辑
  switchEdit: function () {
    var that = this;

    that.setData({
      isEdit: !that.data.isEdit
    });
  }
})
