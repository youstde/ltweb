var layout = require('../../component/layout/html');
var contentTpl = require('./content.ejs');
module.exports = layout(contentTpl(), 'loading', '0');
