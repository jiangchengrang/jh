/*
  1.如果...
  if()....如果 ...
  {
      //执行语句块
  }
 2.如果...否则....
  if()...else...如果...否则....
   if(){
       //执行语句块
   }else{
        //执行语句块
   }
  3.如果...否则如果...否则
   if()...else if()...else if()...else  如果...否则如果...否则
 
  4.switch判断多条件
   switch(对象)....case
 */
  var sex=prompt('请输入你的性别:');
  if(sex=='男'){
      console.log('我的性别为'+sex);
  }if(sex=='女'){
     console.log('我的性别为'+sex);
  }

var student=parseInt(prompt('请输入班级人数'));
if(student==22){
    console.log('今天愉快的上课');
}
if(student>22){
    console.log('闹鬼了');
}
else{
    console.log('全体放假，开心哇!!');
}
//名字，性别，年龄>18 都满足，否则就是不是本人，未成年。
var score=prompt('请输入你的语文成绩:');
if(score>=0 && score<60){d
    console.log('少年要多多努力了，你的成绩为'+score);
}else if(score>=60 && score<=70){
    console.log('刚好及格，还有提升空间，你的成绩为'+score);
}else if(score>70 && score<=90){
    console.log('很优秀，你的成绩为'+score);
}else if(score>90 && score<=100){
    console.log('非常优秀，你的成绩为'+score);
}else{
    console.log('请输入0-100之间的成绩');
}

var week=prompt('请输入你这一周安排');
判断这个对象
switch(week){
    case '星期一'://判断是否满足条件
      document.write('看书');//输出
      break;//跳出整个条件判断
    case '星期二':
     document.write('打游戏');
     break;
    case '星期三':
     document.write('爬山');
     break;
    case '星期四':
     document.write('打篮球');
     break;
    case '星期五':
     document.write('喝茶');
     break;
    default://默认
     document.write('聚会');
}

//switch...case 判断喜欢的颜色
var color=prompt('请输入你喜欢的颜色:');
switch(color){
    case 'red':
    case 'blue':
    case 'yellow':
    document.write('<p style="color:yellow">'+color+'</p>');
    break;
    case 'pink':
    document.write('<p style="color:pink">'+color+'</p>');
    break;
    default:
    document.write('<p style="color:skyblue">自由组合颜色</p>');
}




