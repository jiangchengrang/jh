/*
 keys(fruit):返回key(下标)
 isArray()：判断是不是一个数组
 valueOf():返回的是它本身
 toString():转换成string
 */
var fruit=['香蕉','苹果','菠萝'];
//返回新数组(['0','1','2'])
var key=Object.keys(fruit);

//isArray()：判断是不是一个数组
var isarray=Array.isArray(fruit);
console.log(isarray)

//判断一个变量是否为数组，如果是数组，直接添加值，否则就重现创建数组在添加。
var str=prompt('请输入你要存储数组的明星:');
//如果是数组，直接在后面追加，
if(Array.isArray(str)){
    //push(str):在数组末尾追加
  arr.push(str);
}else{
    //new 数组，并添加值
   arr=new Array('刘亦菲','吴彦祖','彭于晏');
}
//valueOf():返回的是它本身
var _valueof=fruit.valueOf();
//toString():转换成string
var _string=fruit.toString();
