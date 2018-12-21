import Vue from 'vue'
import { Header, Tabbar, TabItem, Button, Loadmore } from 'mint-ui'

/* 按需加载 */
export default () => {
  Vue.component(Header.name, Header)
  Vue.component(Tabbar.name, Tabbar)
  Vue.component(TabItem.name, TabItem)
  Vue.component(Button.name, Button)
  Vue.component(Loadmore.name, Loadmore)
}
