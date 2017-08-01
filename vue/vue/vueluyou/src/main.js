// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


import store from './store'
import TimeEntries from './components/TimeEntries.vue'
import Home from './components/Home'
import time from './components/time'
import 'bootstrap/dist/css/bootstrap.css'
/* eslint-disable no-new */


Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
},{
  path : '/time-entries',
  component : TimeEntries,
  children : [{
    path : 'log-time',
    // 懒加载
    component : resolve => require(['./components/LogTime.vue'],resolve),
  }]
}];

const router = new VueRouter({
  routes
});

const app =new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

//new Vue({
//el: '#app',
//template: '<App/>',
//router,
//components: { App }
//})
