var tpl = require('./html.ejs'),
    headTpl = require('./head.ejs'),
    headerTpl = require('../header/content.ejs'),
    footerTpl = require('../footer/content.ejs');

var layout = function(content, pageTitle, pageFlag) {
    var config= {
        headTpl: headTpl({pageTitle: pageTitle|| '百泰传媒-移动精准大数据互动广告营销'}),
        headerTpl: headerTpl({pageFlag: pageFlag || '1'}),
        content: content || '',
        footerTpl: footerTpl()
    };

    return tpl(config)
}

module.exports = layout;
