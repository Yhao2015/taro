import Vue from 'vue'
import Taro from '@tarojs/taro'
import api from './utils/api'
import HTTPREQUEST from "./utils/http"
import './app.less'
Vue.prototype.$Taro = Taro
Vue.prototype.$Api = api
Vue.prototype.$HTTPREQUEST = HTTPREQUEST

const App = new Vue({
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
