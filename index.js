'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var share = {
  setting: {
    width: 700,
    height: 400
  },
  getCoords: function getCoords(type) {
    if (type === 'top') return (window.innerHeight - share.setting.height) / 2;
    if (type === 'left') return (window.innerWidth - share.setting.width) / 2;
  },
  openWindow: function openWindow(url) {
    window.open(url, '', 'width=' + this.setting.width + ', height=' + this.setting.height + ', top=' + this.getCoords('top') + ', left=' + this.getCoords('left') + ', toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no');
  },
  run: function run(_ref) {
    var type = _ref.type;
    var url = _ref.url;
    var text = _ref.text;
    var des = _ref.des;
    var thumb = _ref.thumb;
    var appkey = _ref.appkey;

    url = url || document.location;
    text = text || document.title;
    des = des || '';
    thumb = thumb || '';
    appkey = appkey || '3896321144';

    var jump = undefined;
    switch (type) {
      case 'weibo':
        jump = 'http://service.weibo.com/share/share.php?url=' + url + '&appkey=' + appkey + '&title=' + text + '&pic=' + thumb + '&ralateUid=1735559201';
        break;
      case 'twitter':
        jump = 'https://twitter.com/share?url=' + url + '&text=' + (text + ' @geekparknet');
        break;
      case 'linkdin':
        jump = 'https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + text + '&summary=' + des + '&source=GeekPark';
        break;
    }

    share.openWindow(jump);
  }
};

exports['default'] = share;
module.exports = exports['default'];
