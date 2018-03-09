require('../../component/layout/reset.css');
require ('./index.css');
require('../../component/layout/common');
var $ = function (dom) {
    return document.querySelectorAll(dom);
}

console.log($('.listTopUl .topUlList'));
var familyLi = $('.listTopUl .topUlList');
var oPhone = $('.phone')[0];
var oContent = $('.phoneContent');
for(let i = 0; i <= familyLi.length - 1 ;i ++){
    oContent[i].style.display = "none";
    oContent[0].style.display = "block";
    familyLi[i].onclick = function (e) {
        var e = event || window.event;
        for(var index = 0;index <= 4; index ++){
            oContent[index].style.display = "none";
        }
        oContent[i].style.display = 'block';
    }
}
