var num=998.98,str='56.98',bool=true;
console.log((parseInt(num)+bool)%5 + bool +parseFloat(str).toFixed(2) + bool);
/*赋值运算符 */
num=parseInt(num);//998
num+=num;//1996  num=num+num;
str=parseInt(str);//56
num/=str;//1996/56  num=num/str
console.log(num);//35.64..


/*比较运算符  > >= < <= == === != !==*/
//输入框，返回string
var age=parseInt(prompt('请输入你的年龄:'));
var x='5';
//两个等号只要值相等，返回true,三个等号不仅值要相等，数据类型匹配，返回true,反之为false
  document.write(x==5);//true
  document.write(x===5);//false
  document.write(null==undefined);//true
  document.write(null===undefined);//false
  document.write(null=="");//false
  document.write(NaN==NaN);//false,跟任何类型都不匹配，包括本身
  document.write(""==undefined);//false
  document.write(age!=='18');//true //值和数据类型只要有一个不满足，都为true,反之false


