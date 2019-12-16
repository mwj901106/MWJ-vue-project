import Vue from "vue";
import 'lib-flexible'
import { Button } from 'mint-ui';

import App from "./App.vue";
import Header from "./components/Header/Header.vue";
import router from "./router";
import Star from "./components/Star/Star.vue";
import store from "./vuex/store";
import './validate'
import * as API from '@/api'

Vue.prototype.$API = API

Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component(Button.name, Button)  //mt-button

new Vue({
  render:h=>h(App),
  router,
  store,
}).$mount('#app')
