import Vue from 'vue'
import Element from 'element-ui/lib/element-ui.common'
import locale from 'element-ui/lib/locale/lang/en'
import { Button, Loading, Row, Col, Card, Input } from 'element-ui'
/* 按需加载 */
export default () => {
  Vue.use(Element, { locale })
  Vue.use(Button)
  Vue.use(Loading)
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Card)
  Vue.use(Input)
}
