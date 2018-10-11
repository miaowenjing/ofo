
const app = getApp()

Page({
  data: {
   latitude:0,
   longitude:0,
  },
  controltap:function(e) {
    
    switch(e.controlId){
      case 1:this.movetoCenter();
      break;
      case 2:
      if(this.timer){
wx.navigateBack({
  delta:1
})
  }else{
        wx.scanCode({
          success: () => {
            wx.showLoading({
              title: '正在获取密码',
            })
            wx.request({
              url: 'https://www.easy-mock.com/mock/5b5157b09265ed3eb2756f7b/demo/getName',
              success: (res) => {
                console.log(res);
                wx.hideLoading();
                wx.redirectTo({
                  url: '../scanResult/index?number=' + res.data.data.number + '&password=' + res.data.data.password,
                  success: () => {
                    wx.showLoading({
                      title: '获取密码成功',
                      duration: 1000
                    })
                  }
                })
              }
            })

          }
        })
      }
   break;
   case 3:
   wx.navigateTo({
     url: '../warn/index',
   });
   break;
   case 4:
   wx.navigateTo({
     url: '..pages/my/index',
   })
    }
  },


  
  onLoad: function (options) {
   this.timer=options.timer
    console.log(options)   
    wx.getLocation({
      type: 'wgs84',
      success: res=> {
     this.setData({
       longitude:res.longitude,
       latitude:res.latitude
     })
      },
    })
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          a:16,
          controls: [{
            id: 1,
            iconPath: '/img/location.png',
            position: {
              left: 20,
              top: res.windowHeight-80,
              width: 50,
              height: 50
            },
            clickable: true,
          },
            {
              id: 2,
              iconPath: '/img/use.png',
              position: {
                left: res.windowWidth / 2 - 45,
                top: res.windowHeight - 100,
                width: 90,
                height:90
              },
              clickable: true
            },
            {
              id: 3,
              iconPath: '/img/warn.png',
              position: {
                left: res.windowWidth -70,
                top: res.windowHeight - 80,
                width: 50,
                height: 50
              },
              clickable: true
            },
            {
              id: 4,
              iconPath: '/img/avatar.png',
              position: {
                left: res.windowWidth -70,
                top: res.windowHeight -155,
                width: 50,
                height: 50
              },
              clickable: true
            },
            {
              id: 5,
              iconPath: '/img/marker.png',
              position: {
                left: res.windowWidth/2 - 15,
                top: res.windowHeight/2 - 45,
                width: 30,
                height: 45
              }
            },
          
            ],
           
         
        })
      }
      
    })
  console.log('onLoad')
  },
onShow:function(){
  this.mapctx=wx.createMapContext("map");
  this.movetoCenter()
  },
  movetoCenter:function(){
    this.mapctx.moveToLocation();
  
  }
})
