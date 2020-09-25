// pages/personalCenter/personalCenter.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
   
  // 事件处理函数：跳转到登陆页 
},
onLoad: function () {},
  // onShow中的代码作用：在登陆页获取到用户新消息后，个人中西页进行判断，有用户信息就把信息添加到<block>对应的位置，没有用户信息就不显示

bindUserLogin:function() {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  GetAttestation:function(){
    //跳转  
      console.log('GetAttestation')    ,
    wx.navigateTo({    
      url:'../attestation/attestation?id=1' , 
    })
},
GetOrder:function(){
  //跳转  
    console.log('GetOrder')    ,
  wx.navigateTo({    
    url:'../myOrder/myOrder' , 
  })
},
GetInformation:function(){
  //跳转  
    console.log('GetInformation')    ,
  wx.navigateTo({    
    url:'../personInform/personInform' , 
  })
},
GetPaypal:function(){
  //跳转  
    console.log('GetPaypal')    ,
  wx.navigateTo({    
    url:'../paypal/paypal' , 
  })
},
GetSetting:function(){
  //跳转  
    console.log('GetSetting')    ,
  wx.navigateTo({    
    url:'../setting/setting' , 
  })
},
  onShow:function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
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

  
 
})