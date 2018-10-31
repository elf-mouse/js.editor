import Vue from 'vue';
import App from './views/layout';
import BalmUI from 'balm-ui-lite';

Vue.config.productionTip = false;
Vue.use(BalmUI);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
