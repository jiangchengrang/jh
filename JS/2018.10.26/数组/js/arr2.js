/*
二维数组:[[],[],[]];
多维数组:[[],[[]]]
*/
var ch=[['中国','美国'],['日本','加拿大']];
//第2列第一个
console.log(ch[0][1]);
for(var i=0;i<ch.length;i++){
    for(var j=0;j<ch[i].length;j++){
        console.log(ch[i][j])
    }
}
//二维数组对象
var ch_obj=[[{name:'lucy',age:18}]];
console.log(ch_obj[0][0].age)