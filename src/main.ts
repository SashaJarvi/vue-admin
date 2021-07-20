import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'http://localhost:8000/api/admin';
axios.defaults.withCredentials = true;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
