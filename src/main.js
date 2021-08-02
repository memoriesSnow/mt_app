import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import bus from './bus'
Vue.prototype.$bus = bus;

import { Button,Icon,Tabbar,TabbarItem,NavBar,Tab,Tabs,Rate,Toast,Sticky,DropdownMenu,DropdownItem } from 'vant'

Vue.use(Button);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Rate);
Vue.use(Toast);
Vue.use(Sticky);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
