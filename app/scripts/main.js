import loadUEditor from '../ueditor';

const submit = document.getElementById('submit');

loadUEditor((UE, v) => {
  let ue = UE.getEditor('container');
  let uEditorHomeUrl = ue.getOpt('UEDITOR_HOME_URL');
  console.log('UEDITOR_HOME_URL', uEditorHomeUrl);

  UE.registerUI('dialog', (editor, uiName) => {
    let btn = new UE.ui.Button({
      name: 'xiumi',
      title: '秀米',
      onclick() {
        let dialog = new UE.ui.Dialog({
          iframeUrl: `${uEditorHomeUrl}/dialogs/xiumi/xiumi.html`,
          editor: editor,
          name: 'xiumi',
          title: '秀米图文消息助手',
          cssRules:
            'width: ' +
            (window.innerWidth - 60) +
            'px;' +
            'height: ' +
            (window.innerHeight - 60) +
            'px;'
        });
        dialog.render();
        dialog.open();
      }
    });

    return btn;
  });

  submit.addEventListener('click', () => {
    let html = ue.getContent();
    console.log(html);
  });
});
