import Vue from "vue";
import 'lib-flexible'
import { Button } from 'mint-ui';
import VueLazyload from 'vue-lazyload'

import App from "./App.vue";
import Header from "./components/Header/Header.vue";
import router from "./router";
import Star from "./components/Star/Star.vue";
import store from "./vuex/store";
import CartControl from './components/CartControl/CartControl.vue' 
import './validate'
import * as API from '@/api'
import i18n from './i18n'
import './mock/mock-server'
import loading from '../src/common/images/loading.gif'

Vue.use(VueLazyload, {
  loading,  // 在要显示的图片没有加载到前显示
})

Vue.prototype.$API = API

Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component('CartControl', CartControl)
Vue.component(Button.name, Button)  //mt-button

new Vue({
  render:h=>h(App),
  router,
  i18n,
  store
}).$mount('#app')
