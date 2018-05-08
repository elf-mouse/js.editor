const VERSION = '1.4.3';

window.UEDITOR_HOME_URL = `/ueditor/${VERSION}/`;

const loadUEditor = (callback = () => {}) => {
  import(`./${VERSION}/ueditor.config`);
  import(`./${VERSION}/ueditor.all`).then(() => {
    callback(UE, VERSION);
  });
};

export default loadUEditor;
