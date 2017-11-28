const formatTime = date => {
  var _date = new Date();

  if (typeof (date) == 'string'){
    var _dateStr = date.split(' ');

    _date = new Date(_dateStr[0] + ' ' + (_dateStr[1] ? _dateStr[1].split(':').map(formatNumber).join(':') : '00:00:00'));
  } else if (date instanceof Date){
    _date = date;
  }

  var year = _date.getFullYear()
  var month = _date.getMonth() + 1
  var day = _date.getDate()
  var hour = _date.getHours()
  var minute = _date.getMinutes()
  var second = _date.getSeconds()

  return {
    date: _date,
    day: [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':'),
    stamp: _date.getTime()
  }
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 显示繁忙提示
var showBusy = text => wx.showToast({
    title: text,
    icon: 'loading',
    duration: 10000
})

// 显示成功提示
var showSuccess = text => wx.showToast({
    title: text,
    icon: 'success'
})

// 显示失败提示
var showModel = (title, content) => {
    wx.hideToast();

    wx.showModal({
        title,
        content: JSON.stringify(content),
        showCancel: false
    })
}

module.exports = { formatTime, showBusy, showSuccess, showModel }
