const cargoList = [
   {
      id: " 1" ,
      title: " The fist cargo!" ,
      poster: " https://upload-images.jianshu.io/upload_images/12759225-a92a17b6f529b259.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/690/format/webp" ,
      addDate:"2020.1.17"

    },
    {
      id: " 2" ,
      title: " The second cargo!" ,
      poster: " https://upload-images.jianshu.io/upload_images/12759225-8c40cf2f68d451ea.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/690/format/webp",
      addDate:"2020.1.17"
    },
    {
      id: " 3" ,
      title: " The third cargo!" ,
      poster: " https://upload-images.jianshu.io/upload_images/12759225-18f60968bd171641.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/720/format/webp",
      addDate:"2020.1.17"
    }
]

//获取新闻列表
function getCargoTable()
{
  let list = [];
  for( var i = 0; i < cargoList.length; i++){
    let obj = {};
    obj.id = cargoList[i].id;
    obj.poster = cargoList[i].poster;
    obj.content = cargoList[i].content;
    obj.addDate = cargoList[i].addDate;
    obj.title = cargoList[i].title;
    list.push(obj);
  }
  return list;
}

//获取订单详情
function getCargoDetail(cargoID)
{
  let message = {
    code:'404',
    cargoList:{}
  };
  for( var i = 0; i < cargo.length; i++){
    if( cargoID == cargo[i].id ){
      message.code = '200',
      message.cargo = cargoList[i];
      break;
    }
  }
  return message;
}
module.exports = {
  getCargoTable :getCargoTable ,
  getCargoDetail:getCargoDetail
}