require('../../component/layout/reset.css');
require('../../component/layout/common');
$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 4000,//可选选项，自动滑动
        loop : true,
        loopAdditionalSlides : 1,
        pagination : '.swiper-pagination',
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        // direction:'vertical', //垂直方向换页

        /* 初始化animate */
        onInit: function(swiper){
            swiperAnimateCache(swiper);  //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });
});
window.onload=function () {
    //选项卡
    var oDelLi = document.querySelectorAll('.delName li');
    var oTab = document.querySelector('.detRight').children;
    function displayNone(){
        for(var index = 0;index <= 3;index++ ){
            oTab[index].style.display = 'none';
        };
    }
    for(let i = 0;i <= 3;i ++){
        var flag = [true, true, true, true];
        $('.delName li').eq(i).hover(function (e) {
            if(flag[i]){
                flag[i] = false;
                displayNone();
                oTab[i].style.display = 'block';
                $(".detTab").eq(i).find('.sImg').each(function(){
                    $(this).addClass('animateFrame');
                })
            };
        })
        $('.delName li').eq(i).mouseleave(function (e) {
            flag[i] = true;
            oTab[i].style.display = 'block';
            $(".detTab").eq(i).find('.sImg').each(function(){
                $(this).removeClass('animateFrame');
            })
        })
    }

    //数字滚动
    var isCount = true;
    $(document).scroll(function(){
    var numScrollTop = $(document).scrollTop();
    if(isCount && numScrollTop >= 1502){
        var mathTimer = null,num1 = 0,num2 = 1,num3 = 0,num4 = 0,timer1 = null,timer2=null,timer3=null,timer4=null;
        var oData1 = document.querySelector('#data1');
        var oData2 = document.querySelector('#data2');
        var oData3 = document.querySelector('#data3');
        var oData4 = document.querySelector('#data4');
        isCount = false;
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

    })
}