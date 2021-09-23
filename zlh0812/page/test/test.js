Page({

  /**
   * 页面的初始数据
   */
  data: {
   navigationList:['单量排序','性别','筛选'],//条件栏展示列表
   
    	},
    // 函数方法	
 	getSort: function (e) {
    var that = this;
    let sortItem = e.currentTarget.dataset.name
    let sortItemId = e.currentTarget.dataset.id
    var up = "navigationList[" + 0 + "]"
    that.setData({
      [up]: sortItem,
    })
    that.getGuideLists()
  }})