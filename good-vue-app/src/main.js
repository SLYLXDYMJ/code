import Vue from 'vue'
import App from './App.vue'
import router from './router'

// codesandbox 会报错
// import './components'
// import './plugins'

// 逐个引入
import Root from './components/root'
import './plugins/element'
import './plugins/message-box'
import './plugins/vue-navigation'

Vue.component(Root.name, Root)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')