//平年润年公用方法
function isyear(year){
    console.log(year)
    if(year%4==0 || (year%400==0 && year%100!=0)){
        //返回结果
        return true;
        alert('ok')
    }else{
        return false;
    }

}
document.getElementById('year').onblur=function(){
    var year_=document.getElementById('year').value;
    var year=isyear(year_);
}
if(year){
    console.log('润年')
}else{
    console.log('平年')
}