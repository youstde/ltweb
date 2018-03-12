require('../../component/layout/reset.css');
require('../../component/layout/common');
// let screenWidth = window.screen.width
// let height = screenWidth/3840*510;
$('.tabchoose_main>li').click(function () {
    $(this).addClass('choose').siblings().removeClass("choose");
    var listNum = $('.chooseListNum').index($(this));
    $(".tab_main_content>div").eq(listNum).show().siblings().hide();
});
