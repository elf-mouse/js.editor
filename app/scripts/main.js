import Vue from 'vue';
import App from './views/ueditor';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
