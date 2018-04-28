const VERSION = '1.4.2';

const loadUEditor = (callback = () => {}) => {
  import(`./${VERSION}/ueditor.config`);
  import(`./${VERSION}/ueditor.all`).then(() => {
    callback(UE, VERSION);
  });
};

export default loadUEditor;
