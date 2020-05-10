import Vue from 'vue'
import App from './App'
import Toasted from 'vue-toasted'
import GSignInButton from 'vue-google-signin-button'

Vue.use(GSignInButton)
 
Vue.use(Toasted, {
  position: "top-right",
  duration: 3000
})

new Vue({
  el: '#app',
  render: h => h(App)
})