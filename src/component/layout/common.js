/*
这里写一些公共的js逻辑代码
 */
$(document).ready(function(){
    var oLi = $(".centerLi")[0];
    console.log(oLi)
    $(".centerLi").click(function () {
        var _this = $(this);
        setTimeout(function () {
            _this.css('borderBottom','4px solid #e83928');
        },500);
    })
});
console.log('common');