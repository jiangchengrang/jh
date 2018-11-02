/*++/--
 ++:每次自增1
   前置++,先加1，在运算表达式
   后置++,先运算表达式，在自增1
 */
var num=10;
// num++;//11
// ++num;//12
// num=num++;//12
// console.log(num)
// num=++num;//13
// console.log(num);

num+=num;//20
num++;//21
num%=5;1//1
num=num--;//1
console.log(num++);//1
console.log(num);//2
var x=10
/*三元运算符
  ？条件，条件为真的时候取:号左边的值，条件为假的时候取:号右边的值
  eval('2+5'):字符串计算（计算器）
  */
console.log(x>5?'开心果':'渣渣飞');

var score=parseInt(prompt('请输入你的成绩'));
console.log(score>=60? "及格" :"不及格");
console.log(score>0 && score<60 ? '不及格':(score >=60 && score<80? '良好':'优秀'))

console.log(eval('2+5'));






