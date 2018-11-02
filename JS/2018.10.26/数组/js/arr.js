/*数组:
   创建数组方法:
    1.var arr=new Array();
    2.var arr=new Array('html','css','JavaScript','jQuery');
    3.var arr1=['红楼梦','水浒传','三国演义','西游记'];

    遍历:
    //for...in...
      for(key in obj){
 */
//创建数组并存储数据
var arr=new Array('html','css','JavaScript','jQuery');
//for循环遍历
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//for...in...遍历
for (var j in arr){
    console.log(arr[j])
}

var arr1=['红楼梦','水浒传','三国演义','西游记'];
for(var s in arr1){
    console.log(arr1[s]);
}

//数组对象
 var arr_obj=[{name:'lucy'},{age:18},{sex:'男'}];
 //获取对象
     var tr=document.getElementsByClassName('table_name');
     var str="";
     for(var z in arr1){
         //拼接
      str+="<td>"+arr1[z]+"</td>"
     }
     //innerHTML解析html
     tr[0].innerHTML=str;

