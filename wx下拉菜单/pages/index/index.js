//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

var nav_centent_list = [
  ['离我最近', '人气最旺','月销量最多'],
  ['价格由低至高升序', '价格由高至低降序', '上架时间', '销量由高至低排序'],
  ['好评最多', '好评最低'],
  ['0-200', '200-500', '500-1000', '1000以上']
]

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    array:[{msg: 'foo', },{ msg: 'moo', },],
    inputName:'',
    nav_title:['店铺','综合','评价','价格'],
    shownavindex: '',
    nav_centent: ''
  },
  selectToggle: function(e){
    let index =  e.currentTarget.dataset.index;
    if (index == e.currentTarget.dataset.index && this.data.nav_centent != null){
      index = e.currentTarget.dataset.index;
      this.setData({
        nav_centent: null,
        shownavindex: null,
      })
    } else if (this.data.nav_centent == null) {
      console.log(11)
      index = e.currentTarget.dataset.index;
      this.setData({
        shownavindex: index,
        nav_centent: nav_centent_list[index]
      })
    } else {
      console.log(22)
      index = e.currentTarget.dataset.index;
      this.setData({
        shownavindex: index,
        nav_centent: nav_centent_list[Number(index)]
      })
    }
  },
  bindTap: function(e){
    this.setData({
      inputName:e.detail.value
    })
  },

  bindReplaceInput(e){
    var value = e.detail.value
  }
  ,
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          time: util.formatTime(new Date()),
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickDemo:function(){
    console.log(app.globalData.userInfo)
  },
    //跳转
    toOther: function() {
      wx.navigateTo({
        url: '/pages/other/other'
      })
    },
   //事件处理函数
   bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
})
