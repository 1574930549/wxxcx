Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    Comment: 0,
    Post: 0,
    dynamic: 0,
  },
  attached() {
    console.log("success")
    let that = this;
    wx.showLoading({
      title: '数据加载中',
      mask: true,
    })
    let i = 0;
    numDH();
    function numDH() {
      if (i < 20) {
        setTimeout(function () {
          that.setData({
            Comment: i,
            Post: i,
            dynamic: i
          })
          i++
          numDH();
        }, 20)
      } else {
        that.setData({
          Comment: that.coutNum(1),
          Post: that.coutNum(66),
          dynamic: that.coutNum(1)
        })
      }
    }
    wx.hideLoading()
  },
  methods: {
    coutNum(e) {
      if (e > 1000 && e < 10000) {
        e = (e / 1000).toFixed(1) + 'k'
      }
      if (e > 10000) {
        e = (e / 10000).toFixed(1) + 'W'
      }
      return e
    },
    CopyLink(e) {
      wx.setClipboardData({
        data: e.currentTarget.dataset.link,
        success: res => {
          wx.showToast({
            title: '已复制',
            duration: 1000,
          })
        }
      })
    },
    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
    showQrcode() {
      wx.previewImage({
        urls: ['https://www.zlh0812.cn/img/wxsk.png'],
        current: 'https://www.zlh0812.cn/img/wxsk.png' // 当前显示图片的http链接      
      })
    },
  }
})