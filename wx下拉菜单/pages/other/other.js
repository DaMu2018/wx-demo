const app = getApp()

Page({
  data:{
     userInfo:'',
     inputValue:''
  }, 
  onLoad () {
     this.setData({
         userInfo:app.globalData.userInfo.nickName,
     })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  clickDemo() {
     
  }
})