// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Hello from './components/Hello'
import Foo from './components/Foo'
import Bar from './components/Bar'

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Hello},
  {path: '/bar', component: Bar},
  {path: '/foo', component: Foo}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')

