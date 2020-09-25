// pages/home/home.js
import common from '../utils/common.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
          swiperImg:[
            {src:"https://upload-images.jianshu.io/upload_images/12759225-a92a17b6f529b259.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/690/format/webp"},
            {src:"https://upload-images.jianshu.io/upload_images/12759225-8c40cf2f68d451ea.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/690/format/webp"},
            {src:"https://upload-images.jianshu.io/upload_images/12759225-18f60968bd171641.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/720/format/webp"},
          ],
          cargoTable:[ ],        
          },
          goToDetail:function(e){
            //获取携带data-id的数据
            let id = e.currentTarget.dataset.id
            console.log(e)
            //携带新闻ID进行页面跳转
            wx.navigateTo({
              url: '../cargoDetail/cargoDetail?id=' + id,
            })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list = common.getCargoTable()
    this.setData({
      cargoTable:list
    })
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