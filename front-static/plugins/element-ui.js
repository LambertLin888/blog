import Vue from 'vue'
import { Button, Loading, Row, Col, Card, Input } from 'element-ui'
/* 按需加载 */
export default () => {
  Vue.use(Button)
  Vue.use(Loading)
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Card)
  Vue.use(Input)
}
