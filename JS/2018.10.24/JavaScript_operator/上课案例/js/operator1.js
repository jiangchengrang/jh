/* 逻辑运算符
   &&(且 and):两者条件同时满足true
   ||(或 or):两个条件满足其中一个都为true
   !(非):取反

   弹框的方法:
    alert('ok'):弹框
    prompt():输入框，返回string
    confirm():确认/取消，返回布尔
*/
var score=parseFloat(prompt('请输入你的数学成绩:'));
var _name='lucy';
console.log(_name=='lily' && score<=100);//false
console.log(_name=='lily' || score<=100);

var isbool=confirm('你确定嘛');
console.log(isbool!=1 && score>85);

console.log(!isbool  || score>=60);

alert('ok');



