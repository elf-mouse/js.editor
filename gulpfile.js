const path = require('path');
const balm = require('balm');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// Documentation - https://balmjs.com/docs/v2/config/
// 中文文档 - https://balmjs.com/docs/v2/zh/config/
balm.config = {
  server: {
    proxyConfig: {
      context: ['/ueditor/1.4.3/php', '/ueditor/1.4.2/php'],
      options: {
        target: 'http://demo.com',
        changeOrigin: true
      }
    }
  },
  roots: {
    source: 'app'
  },
  scripts: {
    entry: {
      main: './app/scripts/main.js' // Entry js file
    },
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
    plugins: [new VueLoaderPlugin()],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'app', 'scripts')
    }
  }
  // More Config
};

balm.go();
