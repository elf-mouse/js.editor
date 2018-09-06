> 注：`ueditor` 需手动下载

## UEditor + xiumi

1. 复制 `app/xiumi/xiumi.html` 至 `app/ueditor/${version}/dialogs/xiumi`
2. 编辑 `app/ueditor/1.4.3/ueditor.config.js` (`line: 412`)

```
section: ['class', 'style'],
```

---

## UEditor + video (for `<iframe>`)

- 编辑 `app/ueditor/1.4.3/dialogs/video/video.js` (`line: 268`)

```js
function createPreviewVideo(url){
    if ( !url )return;

    // var conUrl = convert_url(url);

    // conUrl = utils.unhtmlForUrl(conUrl);

    // $G("preview").innerHTML = '<div class="previewMsg"><span>'+lang.urlError+'</span></div>'+
    // '<embed class="previewVideo" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
    //     ' src="' + conUrl + '"' +
    //     ' width="' + 420  + '"' +
    //     ' height="' + 280  + '"' +
    //     ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >' +
    // '</embed>';

    // NOTE: check iframe tag for youku,qq,iqiyi,bilibili
    var conUrl = url;
    if (/^<iframe/i.test(conUrl)) {
      var result = conUrl.match(/src=("(.*)"|'(.*)')\s/i);
      conUrl = result[2] || result[3];
      conUrl = conUrl.replace(/^https?:/, '');

      $G("preview").innerHTML = '<iframe frameborder="0" allowfullscreen="true"' +
          ' src="' + conUrl + '"' +
          ' width="' + 420  + '"' +
          ' height="' + 280  + '">' +
      '</iframe>';
    } else {
      $G("preview").innerHTML = '<div class="previewMsg"><span>'+lang.urlError+'</span></div>';
    }
}
```
