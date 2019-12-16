import Vue from "vue";
import 'lib-flexible'

import App from "./App.vue";
import Header from "./components/Header/Header.vue";
import router from "./router";
import store from "./vuex/store";


Vue.component('Header', Header)

new Vue({
  render:h=>h(App),
  router,
  store,
}).$mount('#app')
