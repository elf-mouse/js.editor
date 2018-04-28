const VERSION = '1.4.3';

const loadUEditor = async (callback = () => {}) => {
  await import(`./${VERSION}/ueditor.config`);
  await import(`./${VERSION}/ueditor.all`).then(() => {
    callback(UE, VERSION);
  });
};

export default loadUEditor;
