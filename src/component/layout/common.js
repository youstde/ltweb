/*
这里写一些公共的js逻辑代码
 */
$(document).ready(function(){
    //head部分
    var oLi = $(".centerLi")[0];
    $(".centerLi").click(function () {
        var _this = $(this);
        setTimeout(function () {
            _this.css('borderBottom','4px solid #e83928');
        },500);
    })
/**
 * 注册弹窗
 *
 */
    $('.register').click(function () {
        $('#register').css("display","block");
        $('#closeReg').click(function () {
            $('#register').css('display','none');
        })
    })
});
console.log('common');