import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import './assets/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'



import {
  Avatar,
  Button,
  Icon,
  Drawer,
  Col,
  Row,
} from 'ant-design-vue'


Vue.use(Antd)
Vue.use(Col)
Vue.use(Row)
Vue.use(Icon)
Vue.use(Drawer)
Vue.use(Button)
Vue.use(Avatar)
Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init();
  },
  render: h => h(App),
}).$mount('#app')
