require('../../component/layout/reset.css');
require('../../component/layout/common');
(function () {
    $(".getMore").hover(function () {
        $(".getMore>span").removeClass('rotate1').addClass('rotate')

    }, function () {
        $(".getMore>span").removeClass('rotate').addClass("rotate1");
    })

    $('.getMore').click(function () {
        $(".show").show();
        $('.getMore').html("没有更多了").css({"color":"#3333"}).css("border","none");
        // $('.getMore').css({"color":"#3333"});
        // $('.getMore').css("border","none");

    })
})()

console.log('测试输出');