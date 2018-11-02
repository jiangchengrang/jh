/* 
  DOM:文档对象模型（Document Object Model）
  DOM可以动态的改变文档
  DOM查询节点的方法(6种):   
   document.getElementById():获取唯一的id值
   getElementsByTagName('li'):获取多个标签，返回是集合/数组,通过下标取值;
   getElementsByClassName('link'):获取多个类名，返回集合/数组，通过下标取值
 */
//当页面加载，执行函数
 window.onload=function(){
     //获取ID,唯一的值
  var box=document.getElementById('box');
  //动态绑定onclick点击事件，执行函数
  box.onclick=function(){
   //动态添加了行内样式
   box.style.color='red';
   box.style.fontSize='25px';
   box.style.fontWeight='bold';
   box.style.transform='translate(100px) skew(30deg)';
   box.style.transition='ease-in 1s'
  }

   //点击获取成绩
 var btn=document.getElementById('btn');
 //获取成绩文本框对象
 var socre=document.getElementById('socre');
 //获取接收成绩的对象
 var socre_show=document.getElementById('socre_show');
 btn.onclick=function(){
     //获取文本框的value值,div容器接收
     socre_show.innerHTML='我的成绩语文为:'+socre.value;
     socre_show.style.color='red';
     //成绩文本框value值清空
     socre.value="";
     //获取焦点
     socre.focus();
 }

  //innerHTML 和 innerText区别:前者解析标签，后者解析文本内容
  document.getElementById('footer').innerText='<p>今天星期五，开心到飞起来</p>'

  //getElementsByTagName():获取多个标签，返回的是一个集合
  var list=document.getElementById('list');
  var li=list.getElementsByTagName('li');
   li[1].onclick=function(){
       li[1].style.color='red'
   }

   //getElementsByClassName('link'):获取多个类名，返回集合/数组，通过下标取值
   var link=document.getElementsByClassName('link');
   var btn=document.getElementsByClassName('btn');
   btn[0].onclick=function(){
    link[0].href='https://www.taobao.com';
    link[0].innerHTML='欢迎进入双11'
   }
 }






