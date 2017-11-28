//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    userInfo: {},
    logged: false,
    isEdit: false
  },
  onLoad: function () {
    this.pageDataInit();
  },
  // 用户登录示例
  login: function () {
    if (this.data.logged) return

    util.showBusy('正在登录')
    var that = this

    // 调用登录接口
    qcloud.login({
      success(result) {
        if (result) {
          util.showSuccess('登录成功')
          that.setData({
            userInfo: result,
            logged: true
          })
        } else {
          // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
          qcloud.request({
            url: config.service.requestUrl,
            login: true,
            success(result) {
              util.showSuccess('登录成功')
              that.setData({
                userInfo: result.data.data,
                logged: true
              })
            },

            fail(error) {
              util.showModel('请求失败', error)
              console.log('request fail', error)
            }
          })
        }
      },

      fail(error) {
        util.showModel('登录失败', error)
        console.log('登录失败', error)
      }
    })
  },
  // 页面数据初始化
  pageDataInit: function () {
    // 通过openid请求数据

    var _teamInfo = {
      openId: '',
      teamName: '中国男子足球队',
      teamDes: '踢球，最重要的就是开心啦！',
      createDate: ''
    };

    // 时间处理
    if (!_teamInfo.createDate){
      var _ndate = util.formatTime();
      _teamInfo.createDate = _ndate.day.split(' ')[0];
    }

    this.setData({
      teamInfo: _teamInfo
    });
  },
  // 日期变化
  bindDateChange: function (e) {
    this.setData({
      'teamInfo.createDate': e.detail.value
    })
  },
  // 展开编辑
  switchEdit: function () {
    var that = this;

    that.setData({
      isEdit: !that.data.isEdit
    })
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
  }
})
