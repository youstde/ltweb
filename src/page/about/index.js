require('../../component/layout/reset.css');
require ('./index.css');
require('../../component/layout/common');
(function () {
    var oNavUL = document.querySelectorAll('.navUl .navli');
    var oNavTab = document.querySelector('.aboutTab').children;
    for(let i = 0; i < 3;i ++){
        oNavUL[i].onclick = function (e) {
            var e = e || window.event;
            for(var index = 0; index < 3;index ++){
                oNavTab[index].style.display = "none";
                oNavUL[index].style.borderBottom = "none";
            }
            console.log(i);
            oNavUL[i].style.borderBottom = "2px solid red";
            oNavTab[i].style.display = "block";
        }
    }
    console.log(oNavTab);
    // 地图功能
    var map = new BMap.Map("companyAdd",{minZoom:15,maxZoom:18}); // 创建Map实例,设置地图允许的最小/大级别
    map.centerAndZoom(new BMap.Point(120.131383,30.277801),15);
    map.enableScrollWheelZoom(true);
    var local = new BMap.LocalSearch(map, {
        renderOptions: {map: map}
    });
    local.search("百泰传媒");
    theLocation();
    // 用经纬度设置地图中心点
    function theLocation(){
        map.clearOverlays();
        var new_point = new BMap.Point(120.131383,30.277801);
        var marker = new BMap.Marker(new_point);  // 创建标注
        map.addOverlay(marker);              // 将标注添加到地图中
        map.panTo(new_point);
    }
})();

