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
        $('.getMore').html("没有更多了");
    })
})()

console.log('测试输出');