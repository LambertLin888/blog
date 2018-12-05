import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui/lib/element-ui.common'
import locale from 'element-ui/lib/locale/lang/en'
import 'mavon-editor/dist/css/index.css'

import {
  Button,
  Select,
  Card,
  Col,
  Radio,
  RadioGroup,
  DatePicker,
  Row,
  Input,
  Icon,
  Menu,
  Pagination,
  Message,
  Cascader,
  Form,
  FormItem,
  Switch,
  Table,
  TableColumn,
  MessageBox
} from 'element-ui'
import './registerServiceWorker'

router.beforeEach((to, from, next) => {
  const isLogin = window.localStorage.getItem('isLogin')
  if (isLogin || to.name == 'login') {
    next()
  } else {
    router.push({ name: 'login' })
  }
})

Vue.config.productionTip = false
Vue.use(Element, { locale })
Vue.use(Button)
Vue.use(Select)
Vue.use(Card)
Vue.use(Col)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(DatePicker)
Vue.use(Row)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Pagination)
Vue.component(Message)
Vue.use(Cascader)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Switch)
Vue.use(Table)
Vue.use(TableColumn)
Vue.component(MessageBox)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
