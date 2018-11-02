/*
 数组:储存一组数据，看成是一个集合，通过下标/索引，下标从0开始。
 创建数组:
   1.var _name=new Array(); //new 空的数组
*/
//创建了空的数组
var _name=new Array();
//通过下标给数组里面添加值
_name[0]='王立';
_name[1]='曹文静';
_name[2]='张建';
console.log(_name.length);//长度
for(var i=0;i<_name.length;i++){
    document.write(_name[i]+"<br>")
}

var _name1=new Array();
for(var j=0;j<2;j++){
   var arr_name=prompt('请输入你的芳名:');
    _name1[j]=arr_name;
}

for(var s=0;s<_name1.length;s++){
    document.write(_name1[s]);
}

