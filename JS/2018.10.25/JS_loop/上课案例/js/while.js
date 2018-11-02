/* 
 循环:返回执行一条或多条语句
 while(条件):{
     //执行语句块
 }
 调试:谷歌浏览器--sources--找到你要调试JS代码--设置断点---F5进入调试---F10逐步调试---F5退出，断点取消。
  debugger; 调试

 do{
  //执行的语句块
 }while(条件)

  区别:
   while:满足条件以后在执行，do..while:先执行语句块，在满足条件，至少会执行一次.
 */
var i=1;
//是否满足条件判断
while(i<=7){
 /* if(i<=5){
    document.write('今天星期'+i+"上课<br>");    
  }else{
    document.write('今天星期'+i+'放假<br>');
  }*/

    document.write('今天星期'+i+"上课<br>");    
    if(i==2){
      //跳出整个循环语句
      break;
    }
    i++;
}

var j=1,sum=10;
do{
    //debugger; 调试
    sum+=j;
    document.write('总和为'+sum+"<br>");  
    j++;
}while(j<5)


