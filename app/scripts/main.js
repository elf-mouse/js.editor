import loadUEditor from '../ueditor';

const submit = document.getElementById('submit');

loadUEditor(({ getEditor }, v) => {
  let ue = getEditor('container', {
    UEDITOR_HOME_URL: `/ueditor/${v}/`,
    serverUrl: 'api/upload'
  });

  submit.addEventListener('click', () => {
    let html = ue.getContent();
    console.log(html);
  });
});
