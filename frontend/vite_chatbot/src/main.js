import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
createApp(App).mount('#app');

import router from './router'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
