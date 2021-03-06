Page({
  data: {
      tips: '加载中',
      step: 0
  },
  
  onReady: function(){
      var me = this;
      var cxt = wx.createCanvasContext('canvasCircle');
      cxt.setLineWidth(6);
      cxt.setStrokeStyle('#eaeaea');
      cxt.setLineCap('round');
      cxt.beginPath();
      cxt.arc(100, 100, 96, 0, 2 * Math.PI, false);
      cxt.stroke();
      cxt.draw();
      //加载动画
      var steps = 1,startAngle = 1.5 * Math.PI,endAngle = 0,speed = 100,sec = 100;
      function drawing (s, e) {
          var context = wx.createCanvasContext('canvasRing');
          context.setLineWidth(6);
          context.setStrokeStyle('#11be0f');
          context.setLineCap('round');
          context.beginPath();
          context.arc(100, 100, 96, s, e, false);
          context.stroke();
          context.draw();
      }
      function drawLoading (){
          if(steps < 101){
              //这里用me,同步数据,渲染页面
              me.setData({
                  step: steps
              })
              endAngle = steps * 2 * Math.PI / speed + startAngle;
              drawing(startAngle, endAngle);
              steps++;
              console.log(steps);
          }else{
              clearInterval(this.interval);
          }
      }
      this.interval = setInterval(drawLoading,sec);
  }
  
})