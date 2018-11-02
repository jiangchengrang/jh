/*
  数据类型分为基本数据类型和引用数据类型
  基本数据类型（typeof--检测数据类型）:
   1.number(整数，小数，浮点数)
   2.string(用单引号或者双引号引起来就叫string(字符串类型))
     注意：string在做加运算的时候，只能做拼接
  3.boolean(布尔true(1) or false(0)) 
  4.undefined只定义未赋值
  5.NaN(没法做运算) ：4-‘你好’。
  6.Infinity 无穷大
  7.null
*/
var num=998.98;

var str='250';
console.log(typeof num);
console.log(typeof str);
console.log(num+str);

var isbool=true;
console.log(typeof isbool);

var count=null;
console.log(count+num);
//科学计算法
var x=100000000e105000;
console.log(x);


