require('../../component/layout/reset.css');
// require ('./index.css');
require('../../component/layout/common');
var $Dom = function (dom) {
    return document.querySelectorAll(dom);
}

var familyLi = $Dom('.listTopUl .topUlList');
var oPhone = $Dom('.phone')[0];
var oContent = $Dom('.phoneContent');
var isLeft = false;
/*
 *
 * topUlList 透明度变化
 */
$('.topUlList').click(function () {
    console.log($(this).siblings());
    $(this).children('img').css({'opacity':'1','boxShadow':'rgba(43,122,254,0.3) 0px 0px 13px 2px'});
    $(this).siblings().children('img').css("opacity","0.6");
})


/*
 * phone图片
 */
$('.btnLeft').click(function () {
    $(this).addClass("btnActive");
    $('.btnRight').removeClass("btnActive");
    $('.contentImg').animate({left:'0'});
});

$('.btnRight').click(function () {
    $(this).addClass("btnActive");
    $('.btnLeft').removeClass("btnActive");
    $('.contentImg').animate({left:'-259px'});
})
for(let i = 0; i <= familyLi.length - 1 ;i ++){
    oContent[i].style.display = "none";
    oContent[0].style.display = "block";
    familyLi[i].onclick = function (e) {
        var e = event || window.event;
        $('.contentImg').animate({left:'0'});
        event.stopPropagation();
        for(var index = 0;index <= 4; index ++){
            oContent[index].style.display = "none";
        }
        oContent[i].style.display = 'block';
        if(i == 0 || i == 3){
            $Dom('.phoneBtn')[0].style.display = "block";
        }else{
            $Dom('.phoneBtn')[0].style.display = "none";
            return false;
        }
    }
}

$('.requireAdd').click(function () {
    $('body').css('overflow','hidden');
    $('.applyFormBgBox').css('display', 'block');
});
$('.lthd-banner-main').click(function () {
    $('body').css('overflow','hidden');
    $('.applyFormBgBox').css('display', 'block');
});