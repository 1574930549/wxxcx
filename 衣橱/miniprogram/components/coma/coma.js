// components/coma/coma.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },
  lifetimes:{
    created(){//创建成功
      console.log("created")
    },
    attached(){//渲染成功
      console.log("attached")
    },
    detached(){//移除
      console.log("detached")
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
