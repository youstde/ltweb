require('../../component/layout/reset.css');
require('../../component/layout/common');
window.onload=function () {

    //选项卡
    var oDelLi = document.querySelectorAll('.delName li');
    var oTab = document.querySelector('.detRight').children;
    for(let i = 0;i <= 3;i ++){
        oTab[i].style.display = 'none';
        oTab[0].style.display = "block";
        oDelLi[i].onmouseover = function (e) {
            for(var index = 0;index <= 3;index++ ){
                oTab[index].style.display = 'none';
            };
            var e = event || window.event;
            oTab[i].style.display = 'block';
        }
    }

    //数字滚动
    var mathTimer = null,num1 = 0,num2 = 1,num3 = 0,num4 = 0,timer1 = null,timer2=null,timer3=null,timer4=null;
    var oData1 = document.querySelector('#data1');
    var oData2 = document.querySelector('#data2');
    var oData3 = document.querySelector('#data3');
    var oData4 = document.querySelector('#data4');

    timer1 = setInterval(function () {
        num1 += 2;
        if(num1 >= 200){
            clearInterval(timer1);
        }
        oData1.innerHTML = num1;
    },15);
    timer2 = setInterval(function () {
        num2 ++;
        if(num2 >= 3){
            clearInterval(timer2);
        }
        oData2.innerHTML = num2 + "亿";
    },600);
    timer3 = setInterval(function () {
        num3 ++;
        if(num3 >= 15){
            clearInterval(timer3);
        }
        oData3.innerHTML = num3 + "亿";
    },100);
    timer4 = setInterval(function () {
        num4 += 1000;
        if(num4 >= 15000){
            clearInterval(timer4);
        }
        oData4.innerHTML = num4;
    },100);
}