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
    });

    $(".register").click(function(){
        $('body').css('overflow','hidden');
        $('.applyFormBgBox').css('display', 'block');
    });
    $('.closeFormBoxBtn').on('click', function(){
        $('.applyFormBgBox').css('display', 'none');
        $('body').css('overflow','scroll');
    });

    $("input#select").focus(function(){
        $(".areaList").css('display', 'block');
        $("input#select").css('borderBottomLeftRadius', '0');
        $("input#select").css('borderBottomRightRadius', '0');
    });
    $(".areaList>li").click(function(){
        $("li.active").removeClass('active');
        $(this).addClass('active');
        $(".areaList").css('display', 'none');
        $("input#select").css('borderBottomLeftRadius', '3px');
        $("input#select").css('borderBottomRightRadius', '3px');
        var text = this.innerText || this.innerHTML;
        $("input#select").val(text);
    });

    $('.areaList').mouseleave(function(){
        $('input#select').blur();
        $(".areaList").css('display', 'none');
        $("input#select").css('borderBottomLeftRadius', '3px');
        $("input#select").css('borderBottomRightRadius', '3px');
    })

    $('#applyFormSubmitBtn').on('click', function(){
        var isIphone = checkPhone();
        var userName = $('#userName').val(),
            email = $('#qqEmail').val(),
            entName = $('#userCompany').val(),
            entUrl = $('#userCompany').val(),
            city = $('#select').val(),
            tel = $('#userIphone').val(),
            remark = $('#usertextArea').val();

        if(isIphone) {
            var dtaObj = '{"name": "'+userName+'","email": "'+email+'","entName": "'+entName+'","entUrl": "'+entUrl+'","city": "'+city+'","tel": "'+tel+'","remark": "'+remark+'"}';
            $.ajax({
                url: '/api/public/advert/enter?data=' + encodeURIComponent(dtaObj),
                success: function(data){
                    var data = JSON.parse(data);
                    if(data.success) {
                        $('.applyFormBgBox').css('display', 'none');
                        $('body').css('overflow','scroll');
                        alert('提交成功！');
                    }else {
                        alert('提交失败！');
                    }
                }
            })
        }
    });
    // 验证手机号
    function checkPhone () {
        var tel =$('#userIphone').val();
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(tel)) {
            setTimeout(function(){
                alert("手机号码有误，请重填");
            },100);
            return false;
        } else {
            return true;
        }
    }
});