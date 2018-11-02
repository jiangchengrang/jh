/* for循环
 */
//初始值，条件，自增
//debugger;
for(var i=0;i<10;i++){
    if(i%2==0){
        document.write(i+'<br>')
    }    
    if(i==3){
    //跳出整个循环
     //break;
     //跳出当次循环
     continue;
    }
    document.write(i+'<br>')
}

//循环嵌套

 for(var i=0;i<4;i++){//外循环控制行
    document.write("<br>");
     for(var j=0;j<=i;j++){//内循环控制条件循环几次
         document.write("*");
     }
 }

 //倒立*
 //debugger;
  for(var row=5;row>0;row--){
    document.write("<div class='box'>");
      for(var col=0;col<row;col++){
          document.write('<span class="box_text">*</span>')
      }
      document.write("</div>");
  }

  






