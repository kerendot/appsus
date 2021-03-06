// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps';
import BootstrapVue from 'bootstrap-vue';


import 'keen-ui/dist/keen-ui.min.css';
import KeenUI from 'keen-ui';

import 'element-ui/lib/theme-default/index.css'
import Element from 'element-ui'

Vue.config.productionTip = false


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDCry_PLFjoDuWFTJp-4ecimkVkkeMmcPU',
    libraries: 'places',
  }
});

Vue.use(KeenUI);
Vue.use(BootstrapVue);
Vue.use(Element);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
