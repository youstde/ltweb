require('../../component/layout/reset.css');
require('../../component/layout/common');
window.onload=function () {
    var oDelLi = document.querySelectorAll('.delName li');
    var oTab = document.querySelector('.detRight').children;
    for(let i = 0;i <= 3;i ++){
        oTab[i].style.display = 'none';
        oTab[0].style.display = "block";
        oDelLi[i].onmouseover = function (e) {
            for(var index = 0;index <= 3;index++ ){
                oTab[index].style.display = 'none';
            };
            var e = event || window.event;
            oTab[i].style.display = 'block';
        }
    }
}