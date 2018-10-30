// Documentation - http://balmjs.com/docs/en/configuration/toc.html
// 中文文档 - http://balmjs.com/docs/zh-cn/configuration/toc.html
var balm = require('balm');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

balm.config = {
  server: {
    proxyContext: ['/ueditor/1.4.3/php', '/ueditor/1.4.2/php'],
    proxyOptions: {
      target: 'http://demo.com', // Target host
      changeOrigin: true // Needed for virtual hosted sites
    }
  },
  roots: {
    source: 'app'
  },
  styles: {
    ext: 'css', // Default use PostCSS
    autoprefixer: ['last 1 version']
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
      vue$: 'vue/dist/vue.esm.js'
    }
  }
  // More Config
};

balm.go();
