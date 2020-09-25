// pages/detail/detail.js
var common = require('../utils/common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cargo:{
      id: " 1" ,
      title: " The fist cargo!" ,
      poster: " https://upload-images.jianshu.io/upload_images/12759225-a92a17b6f529b259.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/690/format/webp" ,
      addDate:"2020.1.17"

    },
    isAdd:false
  },
  //添加收藏
  addFavorites:function(){
    let cargo = this.data.cargo
    wx.setStorageSync(cargo.id, cargo)
    this.setData({
      isAdd:true
    })
  },
  //取消收藏
  cancelFavorites:function(){
    let cargo = this.data.cargo
    wx.removeStorageSync(cargo.id)
    this.setData({
      isAdd:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id

    //检查当前新闻是否在收藏夹中
    var newcargo = wx.getStorageSync(id)
    //已存在
    if( newcargo != '' ){
      this.setData({
        isAdd:true,
        cargo:newcargo
      })
    }
    //不存在
    else{
      let result = common.getCargoDetail(id)
      //获取新闻内容
      if( result.code == '200' ){
        this.setData({
          cargo:result.cargoList,
          isAdd:false
        })
      }
    }
    
    },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})