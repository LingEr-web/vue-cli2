var mammoth = require("mammoth");

exports.uploadFs = function (address) {
  var fs=require('fs');

  fs.readFile('readtxt/demo.txt','utf-8',function(err,data){
    if(err){
      console.error(err);
    }
    else{
      console.log(data);
    }
  });
}
// export default '1'
// const fs = require('fs');
// exports.uploadFs = function (address) {
//   var contentText = fs.readFileSync(address,'utf-8');
//   console.log(contentText);
//   return address
// }
