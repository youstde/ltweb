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
        $('.getMore').css("display","none");
        $(".noMore").css("display", "block")
    })
})()