import Vue from 'vue'
import App from './App.vue'
import Routes from './routes.js'

new Vue({
  el: '#app',
  render: h => h(App), 
  router: Routes
})