// pages/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addText:"拍摄/相处",
    picUrls:[
      ],
      checkboxValue:[],
    inputValue:{
num:0,
desc:''
    },
  itemValue:[{
    value:'私锁私用',
    checked:false,
    color:"#b9dd08"
  },
    {
      value: '车牌缺损',
      checked: false,
      color: "#b9dd08"
    },
    {
      value: '轮胎坏了',
      checked: false,
      color: "#b9dd08"
    },
    {
      value: '车锁坏了',
      checked: false,
      color: "#b9dd08"
    },
    {
      value: '违章乱停',
      checked: false,
      color: "#b9dd08"
    },
    {
      value: '密码错了',
      checked: false,
      color: "#b9dd08"
    },
    {
      value: '刹车坏了',
      checked: false,
      color: "#b9dd08"
    },
    {
      value: '其他故障',
      checked: false,
      color: "#b9dd08"
    }
  ],
  btnColor:"#f2f2f2f",
  },
bindchange(e){
var _value=e.detail.value;
if(_value.length==0){
  this.setData({
btnColor:"#f2f2f2",
checkboxValue:[]
  })
} else {
  this.setData({
    btnColor: "#b9dd08", 
    checkboxValue:_value,
  })
}
  },
  clickPhoto(e){
wx.chooseImage({
  success: (res)=> {
    var _picUrls=this.data.picUrls;
    var _tfs=res.tempFilePaths;
    for(let temp of _tfs){
      _picUrls.push(temp);
      this.setData({
        picUrls:_picUrls,
        addText:'+'
      })
    }
  },
})
  },
  delPic(e){
// console.log(e.target.dataset.index);
var index=e.target.dataset.index;
let _picUrls=this.data.picUrls;
_picUrls.splice(index,1);
this.setData({
  picUrls:_picUrls
})
if(_picUrls.length==0){
  this.setData({
    addText:"拍摄/相册"
  })
}
  },
  changeNumber(e){
    console.log(e);
    this.setData({
      inputValue:{
        num:e.detail.value,
        desc:this.data.inputValue.desc
      }
    })
  },
  changeDesc(e) {
  
    this.setData({
      inputValue: {
        desc: e.detail.value,
        num: this.data.inputValue.num
      }
    })
  },
  dataSub(){
    if (this.data.checkboxValue.length>0&&this.data.picUrls.length>0){
      console.log(9999);
      wx.request({
        url: 'https://www.easy-mock.com/mock/5b5157b09265ed3eb2756f7b/demo/submit',
        success:(res)=>{
wx.showToast({
  title: '提交成功',
  icon: 'success'
})
        }
      })

    } else{
      wx.showModal({
        title: '请填写完整的反馈信息',
        content: '你瞅啥，赶紧填',
        confirmText:'填行了吧',
        cancelText:"老子不填",
success:(res)=>{
if(!res.confirm){
  wx.navigateBack({
    delta: 1
  })
}
}
      })
    }
  },

  /**
   * 生命周期函数;--监听页面加载
   */
  onLoad: function (options) {
  
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