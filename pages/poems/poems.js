// pages/poems/poems.js
const { jsonify } = require('../../utils/leancloud');
const AV = require('../../utils/av-live-query-core-min');
const Poems = require('../../model/poems');

Page({
  poems: [],
  /**
   * 页面的初始数据
   */
  data: {
    poems: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.fetchPoems("唐代");
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

  },


  fetchPoems: function (dynasty) {
    const query = new AV.Query(Poems)
    .equalTo('dynasty', dynasty);
    query.find().then((poems) => {
      this.setPoems(poems);
    })
  },
  setPoems: function (poems) {
    this.poems = poems;
    this.setData(jsonify({
      poems
    }));
  }
})