share-action
----------
open window/page to share some url

### Usage
`gnpm i @geekpark/share-action`

```javascript
import share from '@geekpark/share-action';

$('.js-share').on('click', function () {
  var type = $(this).data('type');
  share.run({ type });
});

```

### Options
* type `weibo|twitter|linkdin`
* url [page url]
* text [share text]
* des [desciption, only linkdin]
* thumb [share image, only weibo]
* appkey [share by xxx, default to share by @GeekPark, only weibo]
