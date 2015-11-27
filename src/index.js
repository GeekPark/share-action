var share = {
  setting: {
    width: 700,
    height: 400
  },
  getCoords: (type) => {
    if(type === 'top') return (window.innerHeight - share.setting.height)/2;
    if(type === 'left') return (window.innerWidth - share.setting.width)/2;
  },
  openWindow(url) {
    window.open(
      url, '',
      `width=${this.setting.width}, height=${this.setting.height}, top=${this.getCoords('top')}, left=${this.getCoords('left')}, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no`);
  },
  run({type, url, text, des, thumb, appkey}) {
    url = url || document.location;
    text = text || document.title;
    des = des || '';
    thumb = thumb || '';
    appkey = appkey || '3896321144';

    let jump;
    switch (type) {
      case 'weibo':
        jump = `http://service.weibo.com/share/share.php?url=${url}&appkey=${appkey}&title=${text}&pic=${thumb}&ralateUid=1735559201`;
        break;
      case 'twitter':
        jump = `https://twitter.com/share?url=${url}&text=${text + ' @geekparknet'}`;
        break;
      case 'linkdin':
        jump = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}&summary=${des}&source=GeekPark`
        break;
    }

    share.openWindow(jump);
  }
};

export default share;
